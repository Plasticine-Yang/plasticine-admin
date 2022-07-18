import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from './unocss'

/**
 * @description vite 插件配置总入口
 */
export const setupVitePlugins = (): PluginOption[] => {
  const plugins: PluginOption[] = [vue(), unocss()]

  return plugins
}
