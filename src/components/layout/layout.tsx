import TopBar from '@/components/topBar'
import { Header } from '../header/header'

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
