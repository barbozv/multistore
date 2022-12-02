import { TopBar, Header } from '@/components'

type LayoutProps = React.PropsWithChildren<{
  label?: string
}>

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <TopBar />
      <Header />
      {children}
    </>
  )
}
