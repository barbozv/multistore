import Link from 'next/link'
import { Container, Row, Column } from '@/components'
import { megaMenu } from './data'

import * as S from './megaMenu.styles'

export function MegaMenu() {
  return (
    <Container fluid>
      <S.Nav>
        <ul className="menu">
          <li className="menu__item--simple">
            <Link href="#" className="active">
              Home
            </Link>
          </li>
          <li className="menu__item--mega-menu">
            <Link href="#">Departamentos</Link>
            <div className="submenu">
              <Row>
                <Column md={3}>
                  <div className="image-container">inseria a imagem aqui</div>
                </Column>
                <Column md={3}></Column>
                <Column md={3}></Column>
                <Column md={3}></Column>
                <Column md={3}></Column>
              </Row>
            </div>
          </li>
          <li className="menu__item--mega-menu">
            <Link href="#">Produtos</Link>
            <div className="submenu">qual coisa aqui</div>
          </li>
        </ul>
      </S.Nav>
    </Container>
  )
}

{
  /* {megaMenu.map(x => (
            <S.MenuItem key={x.name}>
              <Link href="#">{x.name}</Link>
            </S.MenuItem>
          ))} */
}

{
  /* <S.Menu>
<S.MenuItem>
  <Link href="#">Home</Link>
</S.MenuItem>
<S.MenuItem>
  <Link href="#">Departamentos</Link>
  <S.MegaMenu>
    <S.MegaMenuContainer>
      <S.Menu>
        <S.MenuItem>
          <Link href="#">Feminino</Link>
        </S.MenuItem>
        <S.MenuItem>
          <Link href="#">Masculino</Link>
        </S.MenuItem>
      </S.Menu>
    </S.MegaMenuContainer>
  </S.MegaMenu>
</S.MenuItem>
</S.Menu> */
}
