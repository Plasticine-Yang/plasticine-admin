import type { PaletteOptions, ThemeOptions } from '@mui/material'

import type { ColorModeType, ThemeType } from '../stores'

export type GetDesignTokens = (theme: ThemeType, colorMode: ColorModeType) => ThemeOptions
export type GetPaletteTokens = (theme: ThemeType, colorMode: ColorModeType) => PaletteOptions
export type DefinePaletteTokens = (colorMode: ColorModeType) => PaletteOptions
