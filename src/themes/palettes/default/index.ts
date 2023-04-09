import type { DefinePaletteTokens } from '@/types'

import { darkPaletteTokens } from './dark'
import { lightPaletteTokens } from './light'
import { sharedPaletteTokens } from './shared'

export const defineDefaultPaletteTokens: DefinePaletteTokens = (colorMode) => {
  return {
    ...sharedPaletteTokens,
    ...(colorMode === 'dark' ? darkPaletteTokens : lightPaletteTokens),
  }
}
