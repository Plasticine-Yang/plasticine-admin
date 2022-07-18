import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { rootPath, srcPath } from './build/utils'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': srcPath,
      '#': rootPath,
    },
  },
})
