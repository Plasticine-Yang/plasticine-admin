import type { AppProps } from 'next/app'
import Head from 'next/head'

import { SettingsProvider } from '@/context'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <SettingsProvider>
        <Component {...pageProps} />
      </SettingsProvider>
    </>
  )
}
