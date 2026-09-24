#!/usr/bin/env node

import { spawn, spawnSync } from 'node:child_process'

const hbuilderNode = '/Applications/HBuilderX.app/Contents/HBuilderX/plugins/node/node'
const serverEntry = '/Applications/HBuilderX.app/Contents/HBuilderX/plugins/hbuilderx-ai-chat/mcp-server/dist/index.js'

function commandOutput(command, args) {
  const result = spawnSync(command, args, { encoding: 'utf8' })
  return result.status === 0 ? result.stdout : ''
}

function findBridgeConfig() {
  const existingPort = process.env.HBUILDERX_BRIDGE_PORT
  if (existingPort) {
    return {
      host: process.env.HBUILDERX_BRIDGE_HOST || '127.0.0.1',
      port: existingPort,
    }
  }

  const pids = commandOutput('pgrep', ['-f', serverEntry])
    .split(/\s+/)
    .filter(Boolean)

  for (const pid of pids) {
    const details = commandOutput('ps', ['eww', '-p', pid])
    const port = details.match(/HBUILDERX_BRIDGE_PORT=(\d+)/)?.[1]
    if (port) {
      return {
        host: details.match(/HBUILDERX_BRIDGE_HOST=([^\s]+)/)?.[1] || '127.0.0.1',
        port,
      }
    }
  }

  throw new Error('未发现运行中的 HBuilderX uni-agent MCP bridge。请启动 HBuilderX，并打开 uni-agent 后重试。')
}

try {
  const { host, port } = findBridgeConfig()
  const child = spawn(hbuilderNode, [serverEntry], {
    env: {
      ...process.env,
      HBUILDERX_BRIDGE_HOST: host,
      HBUILDERX_BRIDGE_PORT: port,
    },
    stdio: 'inherit',
  })

  child.on('exit', (code) => process.exit(code ?? 1))
  child.on('error', (error) => {
    console.error(`无法启动 HBuilderX MCP server: ${error.message}`)
    process.exit(1)
  })
} catch (error) {
  console.error(error.message)
  process.exit(1)
}
