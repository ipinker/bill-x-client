import { readFileSync } from 'node:fs'
import { defineConfig } from 'unocss'
import { isApp, isUniappx, presetTheme, presetUnix } from '@limeui/unocss-preset'

const tokenSource = readFileSync(new URL('./x-ui/tokens/light.uts', import.meta.url), 'utf8')
function tokenValue(name: string): string {
  const match = tokenSource.match(new RegExp(`${name}: '([^']+)'`))
  if (match == null) {
    throw new Error(`Missing x-ui token: ${name}`)
  }
  return match[1]
}
const colors = {
  primary: tokenValue('primary'),
  success: tokenValue('success'),
  warning: tokenValue('warning'),
  danger: tokenValue('danger'),
  error: tokenValue('danger'),
  info: tokenValue('info'),
  blue: tokenValue('blue6'),
  purple: tokenValue('purple6'),
  green: tokenValue('green6'),
  red: tokenValue('red6'),
  orange: tokenValue('orange6'),
}

export default defineConfig({
  content: {
    pipeline: {
      include: [/\.(uvue|vue)($|\?)/],
      exclude: [/node_modules/, /dist/, /uni_modules/, /components/],
    },
  },
  presets: [
    presetUnix({ uno: { dark: 'class' } }),
    presetTheme({
      theme: {
        colors,
        light: {
          var: {
            'text-color-1': tokenValue('text1'),
            'text-color-2': tokenValue('text2'),
            'text-color-3': tokenValue('text3'),
            'text-color-4': tokenValue('text4'),
            'bg-color-page': tokenValue('bg'),
            'bg-color-elevated': tokenValue('bgContainer'),
            'bg-color-container': tokenValue('bgContainer'),
            'bg-color-mask': tokenValue('overlayColor'),
          },
        },
        dark: {
          var: {
            'text-color-1': 'rgba(255,255,255,0.85)',
            'text-color-2': 'rgba(255,255,255,0.65)',
            'text-color-3': 'rgba(255,255,255,0.45)',
            'text-color-4': 'rgba(255,255,255,0.25)',
            'bg-color-page': '#181818',
            'bg-color-container': '#242424',
            'bg-color-elevated': '#242424',
            'bg-color-mask': 'rgba(0, 0, 0, 0.65)',
          },
        },
      },
      selectors: {
        light: isUniappx && isApp ? '.page,.l-portal' : ':root,page,.l-portal',
        dark: '.dark',
      },
      prefix: '--x',
    }),
  ],
})
