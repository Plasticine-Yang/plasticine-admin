import type { AppProps } from 'next/app'
import Head from 'next/head'

import { CssBaseline, ThemeProvider } from '@mui/material'

import Settings from '@/components/Settings'
import { useMuiTheme } from '@/hooks'
import { useColorModeFollowSystemLogic } from '@/logics'
import { settingsStore } from '@/stores'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  useColorModeFollowSystemLogic(settingsStore)
  const muiTheme = useMuiTheme()

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Component {...pageProps} />
        <Settings />
      </ThemeProvider>
    </>
  )
}
