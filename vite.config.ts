import { fileURLToPath, URL } from 'node:url'

import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import type { ProxyOptions } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_PORT, VITE_BASE_API_URL, VITE_MOCK_API_URL } =
    env as ImportMetaEnv

  const port = parseInt(VITE_PORT, 10) || 3000
  const proxy: Record<string, string | ProxyOptions> = {
    '/base-api': {
      target: VITE_BASE_API_URL,
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/base-api/, '')
    },
    '/mock-api': {
      target: VITE_MOCK_API_URL,
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/mock-api/, '')
    }
  }

  return {
    plugins: [
      uni(),
      AutoImport({
        dts: true,
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/,
          /\.vue\?mpType/, // .vue
          /\.md$/ // .md
        ],
        imports: [
          'vue',
          'uni-app',
          'pinia',
          {
            from: '@/constants',
            imports: ['GlobalEnvConfig', 'BasePageModel']
          }
        ],
        dirs: ['src/api', 'src/config', 'src/store', 'src/utils']
      }),
      VueDevTools()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : []
    },
    server: {
      host: true,
      port,
      strictPort: true,
      open: false,
      proxy
    },
    preview: {
      host: true,
      port,
      strictPort: true,
      open: false,
      proxy
    }
  }
})
