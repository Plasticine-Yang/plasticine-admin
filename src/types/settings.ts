export type ColorModeType = 'dark' | 'light'
export type ThemeType = 'default'

export interface Settings {
  /**
   * @description 色彩模式 - 浅色 or 深色
   * @default 'dark'
   */
  colorMode: ColorModeType

  /**
   * @description 色彩模式是否需要跟随操作系统
   * @default false
   */
  shouldColorModeFollowSystem: boolean

  /**
   * @description 主题
   * @default 'default'
   */
  theme: ThemeType
}

export interface SettingsContextValue {
  settings: Settings
  onSettingsChange: (changedSettings: Settings) => void
}
