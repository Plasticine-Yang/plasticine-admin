import type { GetPaletteTokens, DefinePaletteTokens, ThemeType } from '@/types'

import { defineDefaultPaletteTokens } from './default'

const paletteTokensRecord: Record<ThemeType, DefinePaletteTokens> = {
  default: defineDefaultPaletteTokens,
}

export const getPaletteTokens: GetPaletteTokens = (theme, colorMode) => {
  const palette = paletteTokensRecord[theme](colorMode)

  return {
    ...palette,
    mode: colorMode,
  }
}
