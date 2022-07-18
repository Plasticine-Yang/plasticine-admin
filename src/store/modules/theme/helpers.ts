import { themeSetting } from '@/settings'
import { getThemeColor } from '@/utils'
import { cloneDeep } from 'lodash-es'

export function initThemeSetting(): Theme.Setting {
  // localStorage 中没有缓存主题颜色的话就使用配置文件中的颜色或默认配置的颜色
  const themeColor = getThemeColor() || themeSetting.themeColor

  return cloneDeep({ ...themeSetting, themeColor })
}
