import { spawnSync } from 'node:child_process'
import { appendFile, mkdir, readdir, rm, stat } from 'node:fs/promises'
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const PORT = 19527
const HOST = '127.0.0.1'
const MAX_BODY_BYTES = 1024 * 1024
const RETENTION_DAYS = 7
const LEVELS = new Set(['error', 'warn', 'info'])
const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const LOG_ROOT = path.join(PROJECT_ROOT, '.log')
const HBUILDERX_ADB = '/Applications/HBuilderX.app/Contents/HBuilderX/plugins/launcher-tools/tools/adbs/adb'
let writeQueue = Promise.resolve()

function formatDate(timestamp) {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function normalizeLogEntry(value) {
  if (value == null || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error('log entry must be an object')
  }
  if (!LEVELS.has(value.level)) {
    throw new Error('unsupported log level')
  }
  if (typeof value.event !== 'string' || value.event.trim() === '') {
    throw new Error('log event is required')
  }
  const timestamp = Number(value.timestamp)
  return {
    level: value.level,
    event: value.event,
    timestamp: Number.isFinite(timestamp) && timestamp > 0 ? timestamp : Date.now(),
    data: value.data ?? null,
  }
}

export function getLogFilePath(root, level, timestamp) {
  if (!LEVELS.has(level)) {
    throw new Error('unsupported log level')
  }
  return path.join(root, level, `${formatDate(timestamp)}.log`)
}

export async function writeLogEntry(root, entry) {
  const filePath = getLogFilePath(root, entry.level, entry.timestamp)
  writeQueue = writeQueue.catch(() => {}).then(async () => {
    await mkdir(path.dirname(filePath), { recursive: true })
    await appendFile(filePath, `${JSON.stringify(entry)}\n`, 'utf8')
  })
  await writeQueue
  return filePath
}

async function cleanupOldLogs(root) {
  const cutoff = Date.now() - RETENTION_DAYS * 24 * 60 * 60 * 1000
  for (const level of LEVELS) {
    const levelPath = path.join(root, level)
    let files = []
    try {
      files = await readdir(levelPath)
    }
    catch {
      continue
    }
    for (const file of files) {
      if (!file.endsWith('.log')) {
        continue
      }
      const filePath = path.join(levelPath, file)
      try {
        const fileStat = await stat(filePath)
        if (fileStat.mtimeMs < cutoff) {
          await rm(filePath, { force: true })
        }
      }
      catch {
      }
    }
  }
}

function configureAdbReverse() {
  const candidates = [process.env.ADB_PATH, HBUILDERX_ADB, 'adb'].filter(Boolean)
  let lastError = ''
  for (const adbPath of candidates) {
    const serialArgs = process.env.ANDROID_SERIAL ? ['-s', process.env.ANDROID_SERIAL] : []
    const result = spawnSync(adbPath, [...serialArgs, 'reverse', `tcp:${PORT}`, `tcp:${PORT}`], {
      encoding: 'utf8',
      timeout: 5000,
    })
    if (result.status === 0) {
      return adbPath
    }
    lastError = (result.stderr || result.error?.message || '').trim()
  }
  throw new Error(`adb reverse failed${lastError === '' ? '' : `: ${lastError}`}`)
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = []
    let size = 0
    request.on('data', (chunk) => {
      size += chunk.length
      if (size > MAX_BODY_BYTES) {
        reject(new Error('request body too large'))
        request.destroy()
        return
      }
      chunks.push(chunk)
    })
    request.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    request.on('error', reject)
  })
}

function sendJson(response, statusCode, data) {
  response.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' })
  response.end(JSON.stringify(data))
}

export async function startLogServer() {
  const skipAdbReverse = process.env.DEV_LOG_SKIP_ADB_REVERSE === '1'
  const adbPath = skipAdbReverse ? 'skipped by DEV_LOG_SKIP_ADB_REVERSE' : configureAdbReverse()
  await Promise.all([...LEVELS].map(level => mkdir(path.join(LOG_ROOT, level), { recursive: true })))
  await cleanupOldLogs(LOG_ROOT)

  const server = http.createServer(async (request, response) => {
    if (request.method === 'GET' && request.url === '/health') {
      sendJson(response, 200, { ok: true })
      return
    }
    if (request.method !== 'POST' || request.url !== '/log') {
      sendJson(response, 404, { error: 'not found' })
      return
    }
    try {
      const body = await readRequestBody(request)
      const entry = normalizeLogEntry(JSON.parse(body))
      try {
        const filePath = await writeLogEntry(LOG_ROOT, entry)
        sendJson(response, 202, { ok: true, file: path.relative(PROJECT_ROOT, filePath) })
      }
      catch (error) {
        sendJson(response, 500, { error: error instanceof Error ? error.message : 'log write failed' })
      }
    }
    catch (error) {
      sendJson(response, 400, { error: error instanceof Error ? error.message : 'invalid request' })
    }
  })

  await new Promise((resolve, reject) => {
    server.once('error', reject)
    server.listen(PORT, HOST, resolve)
  })
  console.log(`[dev-log] listening at http://${HOST}:${PORT}`)
  console.log(`[dev-log] adb reverse configured with ${adbPath}`)
  console.log(`[dev-log] writing to ${LOG_ROOT}`)
  return server
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  startLogServer().catch((error) => {
    console.error(`[dev-log] ${error instanceof Error ? error.message : error}`)
    process.exitCode = 1
  })
}
