import type { Theme } from '@mui/material'

export type ColorModeType = 'dark' | 'light'
export type ThemeType = 'default'

export interface SettingsState {
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

export interface SettingsGetters {
  getMuiTheme: () => Theme
}

export interface SettingsSetters {
  setColorMode: (colorMode: ColorModeType) => void
  setShouldColorModeFollowSystem: (shouldColorModeFollowSystem: boolean) => void
  setTheme: (theme: ThemeType) => void
}

export interface SettingsActions {
  reset: () => void
}

export type SettingsStore = SettingsState & SettingsGetters & SettingsSetters & SettingsActions
