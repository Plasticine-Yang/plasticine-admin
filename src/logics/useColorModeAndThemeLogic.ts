import { useEffect } from 'react'
import { shallow } from 'zustand/shallow'

import { useSettings } from '@/stores'

export function useColorModeAndThemeLogic() {
  const { colorMode, theme, shouldColorModeFollowSystem } = useSettings(
    (settings) => ({
      colorMode: settings.colorMode,
      theme: settings.theme,
      shouldColorModeFollowSystem: settings.shouldColorModeFollowSystem,
    }),
    shallow,
  )

  const setColorMode = useSettings((settings) => settings.setColorMode)

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
