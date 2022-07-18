import type { PluginOption } from 'vite'

import vue from '@vitejs/plugin-vue'
import unocss from './unocss'
import unplugin from './unplugin'

/**
 * @description vite 插件配置总入口
 */
export const setupVitePlugins = (): PluginOption[] => {
  const plugins: PluginOption[] = [vue(), unocss()]

  // unplugin
  plugins.push(...unplugin)

  return plugins
}
