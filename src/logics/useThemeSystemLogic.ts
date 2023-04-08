import { useEffect } from 'react'
import { type StoreApi, useStore } from 'zustand'
import { shallow } from 'zustand/shallow'

import type { SettingsStore } from '@/types'

export function useThemeSystemLogic(settingsStore: StoreApi<SettingsStore>) {
  const { colorMode, theme, shouldColorModeFollowSystem } = useStore(
    settingsStore,
    (settings) => ({
      colorMode: settings.colorMode,
      theme: settings.theme,
      shouldColorModeFollowSystem: settings.shouldColorModeFollowSystem,
    }),
    shallow,
  )

  const setColorMode = useStore(settingsStore, (settings) => settings.setColorMode)

  // colorMode 变化时修改 html 标签的 `data-color-mode`
  useEffect(() => {
    const htmlEl = document.querySelector('html')
    htmlEl && (htmlEl.dataset.colorMode = colorMode)
  }, [colorMode])

  // theme 变化时修改 html 标签的 `data-theme`
  useEffect(() => {
    const htmlEl = document.querySelector('html')
    htmlEl && (htmlEl.dataset.theme = theme)
  }, [theme])

  // shouldColorModeFollowSystem 影响 colorMode
  useEffect(() => {
    if (shouldColorModeFollowSystem) {
      const handleMediaQueryListChange = (e: MediaQueryListEvent) => {
        const isDarkMode = e.matches
        setColorMode(isDarkMode ? 'dark' : 'light')
      }

      const mediaQueryList = matchMedia('(prefers-color-scheme: dark)')
      mediaQueryList.addEventListener('change', handleMediaQueryListChange)

      const isDarkMode = mediaQueryList.matches
      setColorMode(isDarkMode ? 'dark' : 'light')

      return () => {
        mediaQueryList.removeEventListener('change', handleMediaQueryListChange)
      }
    }
  }, [shouldColorModeFollowSystem, setColorMode])
}
