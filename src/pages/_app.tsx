import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import { GlobalStyles } from '@/styles/globals'
import { ThemeProvider } from 'styled-components'
import {theme} from '@/styles/theme'

const robotoFont = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
    <main className={robotoFont.className}>
      <GlobalStyles />
      <Component {...pageProps} />
    </main>
    </ThemeProvider>
  )
}
