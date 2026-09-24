import assert from 'node:assert/strict'
import { mkdtemp, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import test from 'node:test'

import { getLogFilePath, normalizeLogEntry, writeLogEntry } from './dev-log-server.mjs'

test('normalizes supported log entries', () => {
  const entry = normalizeLogEntry({
    level: 'warn',
    event: 'auth.redirect',
    timestamp: 1721779200000,
    data: { code: 30000 },
  })

  assert.equal(entry.level, 'warn')
  assert.equal(entry.event, 'auth.redirect')
  assert.equal(entry.timestamp, 1721779200000)
  assert.deepEqual(entry.data, { code: 30000 })
})

test('rejects unsupported log levels', () => {
  assert.throws(
    () => normalizeLogEntry({ level: 'debug', event: 'request', timestamp: Date.now() }),
    /unsupported log level/,
  )
})

test('builds a daily log path under the requested level', () => {
  const filePath = getLogFilePath('/project/.log', 'info', Date.UTC(2026, 6, 24, 10, 30))
  assert.equal(filePath, path.join('/project/.log', 'info', '2026-07-24.log'))
})

test('appends one JSON entry per line', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'xkong-log-'))
  try {
    const entry = normalizeLogEntry({
      level: 'error',
      event: 'request.response',
      timestamp: Date.UTC(2026, 6, 24, 10, 30),
      data: { code: 30000 },
    })
    const filePath = await writeLogEntry(root, entry)
    await writeLogEntry(root, entry)

    const lines = (await readFile(filePath, 'utf8')).trim().split('\n')
    assert.equal(lines.length, 2)
    assert.deepEqual(JSON.parse(lines[0]), entry)
  }
  finally {
    await rm(root, { recursive: true, force: true })
  }
})
