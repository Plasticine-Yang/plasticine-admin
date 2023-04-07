import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import type { SettingsState, SettingsStore } from '@/types'

const initialSettingsState: SettingsState = {
  colorMode: 'dark',
  shouldColorModeFollowSystem: false,
  theme: 'default',
}

export const useSettings = create<SettingsStore>()(
  devtools(
    immer((set, get) => ({
      ...initialSettingsState,

      // setters
      setColorMode(colorMode) {
        set((state) => {
          state.colorMode = colorMode
        })
      },
      setShouldColorModeFollowSystem(shouldColorModeFollowSystem) {
        set((state) => {
          state.shouldColorModeFollowSystem = shouldColorModeFollowSystem
        })
      },
      setTheme(theme) {
        set((state) => {
          state.theme = theme
        })
      },

      // actions
      toggleColorMode() {
        const { colorMode, setColorMode } = get()
        setColorMode(colorMode === 'dark' ? 'light' : 'dark')
      },
    })),
  ),
)
