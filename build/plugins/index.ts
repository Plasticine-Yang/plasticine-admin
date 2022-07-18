import type { PluginOption } from 'vite'

import vue from '@vitejs/plugin-vue'
import unocss from './unocss'
import unplugin from './unplugin'
import html from './html'

/**
 * @description vite 插件配置总入口
 */
export const setupVitePlugins = (viteEnv: ImportMetaEnv): PluginOption[] => {
  const plugins: PluginOption[] = [vue(), unocss()]

  // unplugin
  plugins.push(...unplugin)

  // html
  plugins.push(...html(viteEnv))

  return plugins
}
