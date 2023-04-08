import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

import { useThemeSystemLogic } from '@/logics'
import '@/styles/globals.scss'
import { settingsStore } from '@/stores'

export default function App({ Component, pageProps }: AppProps) {
  // 主题系统逻辑
  useThemeSystemLogic(settingsStore)

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ChakraProvider resetCSS={false}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
