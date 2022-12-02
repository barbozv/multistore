import { Roboto } from '@next/font/google'

import TopBar from '@/components/topBar'
import { GlobalStyles } from '@/styles/globals'

type RootLayoutProps = {
  children: React.ReactNode
}

const RobotoFont = Roboto({
  variable: '--default-font',
  weight: '100',
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <head>
        <title>Multi Store</title>
      </head>
      <body className={RobotoFont.variable}>
        <GlobalStyles />
        <TopBar />
        <main>{children}</main>
      </body>
    </html>
  )
}
