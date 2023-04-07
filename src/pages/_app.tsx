import type { AppProps } from 'next/app'
import Head from 'next/head'

import { useColorModeAndThemeLogic } from '@/logics'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  // 主题系统逻辑
  useColorModeAndThemeLogic()

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
