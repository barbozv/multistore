import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import { GlobalStyles } from '@/styles/globals'

const robotoFont = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={robotoFont.className}>
      <GlobalStyles />
      <Component {...pageProps} />
    </main>
  )
}
