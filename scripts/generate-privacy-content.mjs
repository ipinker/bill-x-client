import { readFileSync, writeFileSync } from 'node:fs'

const source = readFileSync('hybrid/html/privacy.html', 'utf8')
const body = source.match(/<body>([\s\S]*?)<\/body>/i)?.[1] ?? ''
const blocks = [...body.matchAll(/<(h1|p)\b([^>]*)>([\s\S]*?)<\/\1>/gi)]

function plainText(html) {
  return html
    .replace(/<br\s*\/?\s*>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()
}

const paragraphs = blocks
  .map(([, tag, attributes, content]) => {
    const value = plainText(content)
    if (value === '' || value.startsWith('开发预览：')) return ''
    const heading = tag.toLowerCase() === 'h1' || /\btitle\b/.test(attributes)
    return heading
      ? `<h3 style="font-size:17px;line-height:1.5;margin:18px 0 8px;">${value}</h3>`
      : `<p style="font-size:14px;line-height:1.7;margin:0 0 10px;">${value}</p>`
  })
  .filter(Boolean)

const html = paragraphs.join('')
writeFileSync('src/auth/privacy-content.uts', `// Generated from hybrid/html/privacy.html; replace both together when approved legal copy arrives.\nexport const privacyContent = ${JSON.stringify(html)}\n`)
