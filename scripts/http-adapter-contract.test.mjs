import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const apiBaseUrl = 'http://192.168.143.129/api'

test('generated YApi client has a local HTTP transport targeting the development gateway', async () => {
  const [transport, types, constants, yapiRequest] = await Promise.all([
    readFile(new URL('../src/http/index.uts', import.meta.url), 'utf8'),
    readFile(new URL('../src/http/request/types.uts', import.meta.url), 'utf8'),
    readFile(new URL('../src/constants/index.uts', import.meta.url), 'utf8'),
    readFile(new URL('../yapi/yapiRequest.uts', import.meta.url), 'utf8'),
  ])

  assert.match(transport, /uni\.request\(/)
  assert.match(transport, /export const http/)
  assert.match(types, /export type HttpRequestConfig/)
  assert.match(constants, new RegExp(`REQUEST_SERVER_BASE_URL = ["']${apiBaseUrl}["']`))
  assert.match(yapiRequest, /from ['"]\.\.\/src\/http['"]/)
})

test('development gateway exposes the public API route', async () => {
  const response = await fetch(`${apiBaseUrl}/public/config`)

  assert.equal(response.status, 200)
})

test('repository keeps local credentials outside version control', async () => {
  const [gitignore, yapiConfig] = await Promise.all([
    readFile(new URL('../.gitignore', import.meta.url), 'utf8'),
    readFile(new URL('../yapi/yapi-to-ts.ts', import.meta.url), 'utf8'),
  ])

  assert.match(gitignore, /^\.env\*$/m)
  assert.match(gitignore, /^\.mcp\.json$/m)
  assert.match(gitignore, /^manifest\.json$/m)
  assert.match(gitignore, /^\.agent\/mcp_config\.json$/m)
  assert.match(gitignore, /^\.trae\/mcp\.json$/m)
  assert.match(gitignore, /^\.vscode\/$/m)
  assert.match(gitignore, /^static\/app\/cer\/$/m)
  assert.match(yapiConfig, /process\.env\.YAPI_TOKEN/)
})

test('native development settings permit the local HTTP API gateway', async () => {
  const [androidManifest, iosInfo] = await Promise.all([
    readFile(new URL('../nativeResources/android/AndroidManifest.xml', import.meta.url), 'utf8'),
    readFile(new URL('../nativeResources/ios/info.plist', import.meta.url), 'utf8'),
  ])

  assert.match(androidManifest, /android:usesCleartextTraffic="true"/)
  assert.match(iosInfo, /<key>192\.168\.143\.129<\/key>/)
  assert.match(
    iosInfo,
    /<key>NSExceptionAllowsInsecureHTTPLoads<\/key>\s*<true\/>/,
  )
})
