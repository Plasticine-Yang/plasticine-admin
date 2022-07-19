import { defineStore } from 'pinia'
import { initThemeSetting } from './helpers'

type ThemeState = Theme.Setting

export const useThemeStore = defineStore('theme-store', {
  state: (): ThemeState => initThemeSetting(),
  actions: {
    setDarkMode(darkMode: boolean) {
      this.darkMode = darkMode
    },
  },
})
