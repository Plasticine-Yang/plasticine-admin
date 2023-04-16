import { createStore } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import type { MenuState, MenuStore } from '@/types'

const initialState: MenuState = {
  expanded: true,
  expandedInView: true,
}

export const createMenuStore = () => {
  const storeName = 'MenuStore'

  return createStore<MenuStore>()(
    immer(
      devtools(
        (set, get) => {
          return {
            ...initialState,

            setExpanded(expanded) {
              set({ expanded })
            },
            setExpandedInView(expandedInView) {
              set({ expandedInView })
            },

            toggle() {
              set((state) => {
                state.expanded = !state.expanded
              })
            },
          }
        },
        { name: storeName },
      ),
    ),
  )
}

export const menuStore = createMenuStore()
