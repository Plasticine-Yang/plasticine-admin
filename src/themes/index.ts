import type { GetDesignTokens } from '@/types'

import { getPaletteTokens } from './palettes'

export const getDesignTokens: GetDesignTokens = (theme, colorMode) => {
  return {
    palette: getPaletteTokens(theme, colorMode),
  }
}
