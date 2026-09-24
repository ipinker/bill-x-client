import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'

const apiTsFilePath = new URL('../src/api/index.ts', import.meta.url)
const apiUtsFilePath = new URL('../src/api/index.uts', import.meta.url)
const typeFilePath = new URL('../src/api/types/api.d.ts', import.meta.url)

let source = readFileSync(apiTsFilePath, 'utf-8')

function ensureTypeImport(sourceText) {
  return sourceText.replace(/import type \{[\s\S]*?\} from '\.\/types\/api'\n?/g, '')
}

function findLeadingCommentStart(sourceText, exportStart) {
  const commentStart = sourceText.lastIndexOf('/**', exportStart)
  if (commentStart === -1) {
    return exportStart
  }

  const between = sourceText.slice(commentStart, exportStart)
  if (between.includes('export interface') || between.includes('export type')) {
    return exportStart
  }

  return commentStart
}

function extractTypeBlocks(sourceText) {
  const blocks = []
  const reg = /^export (interface|type) (I\w+(?:Req|Res))\b/gm
  let match = reg.exec(sourceText)
  while (match) {
    const kind = match[1]
    const name = match[2]
    const exportStart = match.index
    const start = findLeadingCommentStart(sourceText, exportStart)
    let end = exportStart
    let textKind = kind

    if (kind === 'interface') {
      const braceStart = sourceText.indexOf('{', exportStart)
      if (braceStart === -1) {
        match = reg.exec(sourceText)
        continue
      }

      let depth = 1
      let index = braceStart + 1
      while (index < sourceText.length && depth > 0) {
        const char = sourceText[index]
        if (char === '{') {
          depth++
        }
        else if (char === '}') {
          depth--
        }
        index++
      }
      end = index
    }
    else {
      const equalIndex = sourceText.indexOf('=', exportStart)
      if (equalIndex === -1) {
        match = reg.exec(sourceText)
        continue
      }

      let index = equalIndex + 1
      while (index < sourceText.length && /\s/.test(sourceText[index])) {
        index++
      }

      if (sourceText[index] === '{') {
        let depth = 1
        index++
        while (index < sourceText.length && depth > 0) {
          const char = sourceText[index]
          if (char === '{') {
            depth++
          }
          else if (char === '}') {
            depth--
          }
          index++
        }
        while (index < sourceText.length && sourceText[index] === '[') {
          index++
          if (index < sourceText.length && sourceText[index] === ']') {
            index++
          }
        }
        end = index
        textKind = 'interface'
      }
      else {
        const lineEnd = sourceText.indexOf('\n', exportStart)
        end = lineEnd === -1 ? sourceText.length : lineEnd
      }
    }

    while (end < sourceText.length && sourceText[end] === '\n') {
      end++
    }

    let text = sourceText.slice(start, end).trim()
    if (kind === 'type' && textKind === 'interface') {
      text = text.replace(`export type ${name} = {`, `export interface ${name} {`)
    }

    blocks.push({
      name,
      start,
      end,
      text,
    })

    reg.lastIndex = end
    match = reg.exec(sourceText)
  }

  return blocks
}

function extractDataTypes(blocks) {
  const newBlocks = []

  for (const block of blocks) {
    if (!block.name.endsWith('Res')) {
      continue
    }

    const match = /data\??:\s*\{/.exec(block.text)
    if (!match) {
      continue
    }

    const dataStart = match.index + match[0].length - 1
    let depth = 1
    let index = dataStart + 1

    while (index < block.text.length && depth > 0) {
      if (block.text[index] === '{') {
        depth++
      }
      else if (block.text[index] === '}') {
        depth--
      }
      index++
    }

    if (depth !== 0) {
      continue
    }

    const dataContent = block.text.substring(dataStart, index)
    const dataTypeName = `${block.name}Data`
    newBlocks.push({
      name: dataTypeName,
      start: -1,
      end: -1,
      text: `export interface ${dataTypeName} ${dataContent}`,
      isExtra: true,
    })

    block.text = `${block.text.substring(0, match.index)}data?: ${dataTypeName}${block.text.substring(index)}`
  }

  return [...blocks, ...newBlocks]
}

function dedupeBlocks(blocks) {
  const map = new Map()
  for (const block of blocks) {
    map.set(block.name, block)
  }
  return [...map.values()]
}

function buildTypeFileContent(blocks) {
  const body = blocks.map(block => block.text).join('\n\n')
  const needsFileData = /\bFileData\b/.test(body)
  const importBlock = needsFileData ? 'import type { FileData } from \'../../../yapi/yapiRequest\'\n\n' : ''
  const stripped = body.replace(/^export (interface|type) /gm, '$1 ')
  const indented = stripped.split('\n').map(line => (line ? `  ${line}` : '')).join('\n')
  return `${importBlock}declare global {\n${indented}\n}\n\nexport {}\n`
}

function transformToUts(sourceText) {
  const helperHeader = `/* eslint-disable */\n\n/* 该文件由 yapi-to-typescript 自动生成并转换为 UTS，请勿直接修改！！！ */\n\nimport request, { prepareRequest, type RequestOptionsWithExtra, type YapiRequestConfig } from '../../yapi/yapiRequest'\n\n`

  const bodyStart = sourceText.indexOf('const mockUrl_')
  let transformed = bodyStart >= 0 ? sourceText.slice(bodyStart) : sourceText

  transformed = transformed.replace(/type (\w+RequestConfig) = Readonly<[\s\S]*?\n>\n/g, 'type $1 = YapiRequestConfig\n')
  transformed = transformed.replace(/= \/\*#__PURE__\*\/ /g, '= ')
  transformed = transformed.replace(/^\s*\/\*#__PURE__\*\/\s*/gm, '')
  transformed = transformed.replace(/const (\w+) = (.+?) as any/g, 'const $1 = $2')
  transformed = transformed.replace(/const (dataKey_\w+) = undefined\b/g, 'const $1 = null')
  transformed = transformed.replace(/\bundefined as any\b/g, 'null')
  transformed = transformed.replace(/method: Method\.(\w+)/g, 'method: \'$1\'')
  transformed = transformed.replace(/requestBodyType: RequestBodyType\.(\w+)/g, 'requestBodyType: \'$1\'')
  transformed = transformed.replace(/responseBodyType: ResponseBodyType\.(\w+)/g, 'responseBodyType: \'$1\'')
  transformed = transformed.replace(/queryStringArrayFormat: QueryStringArrayFormat\.(\w+)/g, 'queryStringArrayFormat: \'$1\'')
  transformed = transformed.replace(
    /export const (\w+) = \(\s*requestData\??: ([^,\n]+),\s*\.\.\.args: UserRequestRestArgs\s*\) => \{\s*return request<([^>]+)>\(\s*prepare\((\w+), requestData\),\s*\.\.\.args,?\s*\)\s*\}/g,
    (_, functionName, requestType, responseType, configName) => {
      return `export function ${functionName}(requestData: ${requestType} | null = null, options: RequestOptionsWithExtra | null = null): Promise<${responseType}> {\n  return request<${responseType}>(prepareRequest(${configName}, requestData), options)\n}`
    },
  )
  transformed = transformed.replace(/^\w+\.requestConfig =\n\s+\w+\n?/gm, '')
  transformed = transformed.replace(/^\w+\.requestConfig = \w+\n?/gm, '')

  const fallbackNames = Array.from(new Set(Array.from(transformed.matchAll(/\b(I[A-Za-z0-9]+(?:Req|Res))\b/g)).map(match => match[1]))).sort()
  const fallbackTypes = fallbackNames.length > 0
    ? `/* UTS API wrapper fallback types:begin */\n${fallbackNames.map(name => `type ${name} = UTSJSONObject`).join('\n')}\n/* UTS API wrapper fallback types:end */\n\n`
    : ''

  return `${helperHeader}${fallbackTypes}${transformed}`.replace(/\n{3,}/g, '\n\n')
}

const allBlocks = extractDataTypes(extractTypeBlocks(source))
const blocks = dedupeBlocks(allBlocks)
const typeFileContent = buildTypeFileContent(blocks)

for (let index = allBlocks.length - 1; index >= 0; index--) {
  const block = allBlocks[index]
  if (block.isExtra) {
    continue
  }
  source = `${source.slice(0, block.start)}${source.slice(block.end)}`
}

source = ensureTypeImport(source)

mkdirSync(new URL('../src/api/types/', import.meta.url), { recursive: true })
writeFileSync(typeFilePath, typeFileContent)
writeFileSync(apiUtsFilePath, transformToUts(source))
rmSync(apiTsFilePath, { force: true })

console.log('✔ yapi-postprocess：已生成 src/api/index.uts 与 src/api/types/api.d.ts')
