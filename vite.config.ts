import { defineConfig, loadEnv } from 'vite'
import { setupVitePlugins } from './build/plugins'
import { rootPath, srcPath } from './build/utils'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const viteEnv = loadEnv(mode, process.cwd()) as ImportMetaEnv

  return {
    plugins: setupVitePlugins(viteEnv),
    resolve: {
      alias: {
        '@': srcPath,
        '#': rootPath,
      },
    },
    server: {
      host: '0.0.0.0',
      open: true,
    },
  }
})
