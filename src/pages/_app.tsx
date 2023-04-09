import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { useMuiTheme } from '@/hooks'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  const muiTheme = useMuiTheme()

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
