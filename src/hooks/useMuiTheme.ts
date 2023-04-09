import { useCallback } from 'react'
import { useStore } from 'zustand'

import { settingsStore } from '@/stores'

export function useMuiTheme() {
  const colorMode = useStore(settingsStore, (settings) => settings.colorMode)
  const theme = useStore(settingsStore, (settings) => settings.theme)
  const getMuiTheme = useStore(
    settingsStore,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useCallback((settings) => settings.getMuiTheme, [theme, colorMode]),
  )
  const muiTheme = getMuiTheme()

  return muiTheme
}
