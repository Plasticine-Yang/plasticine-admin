import { PaletteOptions } from '@mui/material'

export const whiteColor = '#ffffff'
export const darkColor = '#000000'

export const sharedPaletteTokens: PaletteOptions = {
  // A higher value for "tonalOffset" will make calculated values for "light" lighter, and "dark" darker.
  tonalOffset: 0.1,
  /**
   * A higher value for "contrastThreshold" increases the point at which a background color is considered light,
   * and given a dark "contrastText".
   */
  contrastThreshold: 4.5,
  primary: {
    main: '#9155fd',
    contrastText: whiteColor,
  },
  secondary: {
    main: '#8a8d93',
    contrastText: whiteColor,
  },
  success: {
    main: '#56ca00',
    contrastText: whiteColor,
  },
  error: {
    main: '#FF4C51',
    contrastText: whiteColor,
  },
  warning: {
    main: '#FFB400',
    contrastText: whiteColor,
  },
  info: {
    main: '#16B1FF',
    contrastText: whiteColor,
  },
}
