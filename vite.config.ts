import { defineConfig } from 'vite'
import Uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'node:path'
import uniLayoutsPlugin from './plugins/uni-layouts-plugin'
import autoRootPlugin from './plugins/root-plugin'

export default async () => {
  const UnoCSS = (await import('unocss/vite')).default

  return defineConfig({
    plugins: [
      uniLayoutsPlugin(),
      autoRootPlugin(),
      Uni(),
      UnoCSS({
        configFile: resolve(__dirname, 'uno.config.ts'),
      }),
    ],
    server: {
      host: '0.0.0.0',
      port: 9001,
      proxy: {
        '/dev-api': {
          target: 'https://xkang-gateway-uat.nhf.cn',
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp(`^/dev-api`), ''),
        },
      },
    },
  })
}
