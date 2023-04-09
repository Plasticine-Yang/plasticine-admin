import { useEffect } from 'react'
import { useStore, type StoreApi } from 'zustand'

import type { SettingsStore } from '@/types'
import { useMediaQuery } from '@mui/material'

/**
 * @description 深浅色模式跟随操作系统
 */
export function useColorModeFollowSystemLogic(settingsStore: StoreApi<SettingsStore>) {
  const shouldColorModeFollowSystem = useStore(settingsStore, (settings) => settings.shouldColorModeFollowSystem)
  const setColorMode = useStore(settingsStore, (settings) => settings.setColorMode)

  const isDark = useMediaQuery('(prefers-color-scheme: dark)', {
    defaultMatches: true,
  })

  // shouldColorModeFollowSystem 影响 colorMode
  useEffect(() => {
    if (shouldColorModeFollowSystem) {
      setColorMode(isDark ? 'dark' : 'light')
    }
  }, [isDark, shouldColorModeFollowSystem, setColorMode])
}
