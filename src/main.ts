import * as Pinia from 'pinia'
import uviewPlus from 'uview-plus'
import { createSSRApp } from 'vue'

import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())
  app.use(uviewPlus as any)
  return {
    app,
    Pinia
  }
}
