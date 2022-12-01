import { GlobalStyles } from '../styles/globals'
import type { AppProps } from 'next/app'
import { Montserrat } from '@next/font/google'
const montserrat = Montserrat({ subsets: ['latin'], weight: '400' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <GlobalStyles />
      <Component {...pageProps} />
    </main>
  )
}
