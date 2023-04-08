import { createStore } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import type { SettingsState, SettingsStore } from '@/types'

const initialSettingsState: SettingsState = {
  colorMode: 'dark',
  shouldColorModeFollowSystem: false,
  theme: 'default',
}

export const createSettingsStore = () => {
  const storeName = 'SettingsStore'

  return createStore<SettingsStore>()(
    immer(
      devtools(
        (set, get) => ({
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
        }),
        { name: storeName },
      ),
    ),
  )
}

export const settingsStore = createSettingsStore()
