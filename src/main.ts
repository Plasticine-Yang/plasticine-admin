import { createApp } from 'vue'
import App from './App.vue'

import { setupRouter } from './router'
import { setupAssets } from './setup'
import { setupStore } from './store'

function setupApp(appQuerySelector: string) {
  // 处理静态资源的加载 比如 css
  setupAssets()

  // app
  const app = createApp(App)

  // vue-router
  setupRouter(app)

  // pinia
  setupStore(app)

  app.mount(appQuerySelector)
}

setupApp('#app')
