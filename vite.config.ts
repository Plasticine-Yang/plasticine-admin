import { defineConfig } from 'vite'
import { setupVitePlugins } from './build/plugins'
import { rootPath, srcPath } from './build/utils'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: setupVitePlugins(),
  resolve: {
    alias: {
      '@': srcPath,
      '#': rootPath,
    },
  },
})
