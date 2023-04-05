import produce from 'immer'
import { createContext, PropsWithChildren, useCallback, useEffect, useState } from 'react'

import type { Settings, SettingsContextValue } from '@/types'

const initialSettings: Settings = {
  colorMode: 'dark',
  shouldColorModeFollowSystem: false,
  theme: 'default',
}

const SettingsContext = createContext<SettingsContextValue>({
  settings: initialSettings,
  onSettingsChange: () => void 0,
})

const { Provider: _SettingsProvider, Consumer: SettingsConsumer } = SettingsContext

const SettingsProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props

  const [settings, setSettings] = useState<Settings>(initialSettings)
  const { colorMode, shouldColorModeFollowSystem, theme } = settings

  const handleSettingsChange = useCallback((changedSettings: Settings) => {
    setSettings(changedSettings)
  }, [])

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
        setSettings((prevSettings) =>
          produce(prevSettings, (draft) => {
            const isDarkMode = e.matches
            draft.colorMode = isDarkMode ? 'dark' : 'light'
          }),
        )
      }

      const mediaQueryList = matchMedia('(prefers-color-scheme: dark)')
      mediaQueryList.addEventListener('change', handleMediaQueryListChange)

      setSettings((prevSettings) =>
        produce(prevSettings, (draft) => {
          const isDarkMode = mediaQueryList.matches
          draft.colorMode = isDarkMode ? 'dark' : 'light'
        }),
      )

      return () => {
        mediaQueryList.removeEventListener('change', handleMediaQueryListChange)
      }
    }
  }, [shouldColorModeFollowSystem])

  return <_SettingsProvider value={{ settings, onSettingsChange: handleSettingsChange }}>{children}</_SettingsProvider>
}

export { SettingsContext, SettingsProvider, SettingsConsumer }
