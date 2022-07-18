import { createApp } from 'vue'
import App from './App.vue'
import { setupAssets } from './setup'

function setupApp(appQuerySelector: string) {
  // 处理静态资源的加载 比如 css
  setupAssets()

  // app
  const app = createApp(App)

  app.mount(appQuerySelector)
}

setupApp('#app')
