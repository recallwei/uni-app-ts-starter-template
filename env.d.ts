/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_PORT: string
  readonly VITE_APP_VERSION: string
  readonly VITE_BASE_API_URL: string
  readonly VITE_MOCK_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
