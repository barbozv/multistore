import * as S from './header.styles'

import { Burger, Container, Logo, MegaMenu, UserAccount } from '@/components'

export function Header() {
  return (
    <S.Header>
      <Container fluid>
        <nav className=" header__container">
          <Burger />
          <MegaMenu />
          <Logo />
          <UserAccount />
        </nav>
      </Container>
    </S.Header>
  )
}
