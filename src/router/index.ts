import { App } from 'vue'
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'
import { constantRoutes } from './routes'

const { VITE_ROUTER_MODE, VITE_BASE_URL } = import.meta.env

// 路由实例
const router = createRouter({
  history:
    VITE_ROUTER_MODE === 'history'
      ? createWebHistory(VITE_BASE_URL)
      : createWebHashHistory(VITE_BASE_URL),
  routes: constantRoutes,
})

// 加载 vue-router
export function setupRouter(app: App) {
  app.use(router)
}
