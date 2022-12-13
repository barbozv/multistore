import { Container } from '@/components'
import { SocialLink } from '@/components/socialLink'
import { DropDown } from '@/components/dropDown'

import * as S from './topBar.styles'

export function TopBar() {
  return (
    <S.TopBar>
      <Container fluid>
        <div className="topBar__container">
          <SocialLink />
          <div className="topBar__container__user-area">
            <DropDown label="English">portugues</DropDown>
            <DropDown label="Account">Account</DropDown>
          </div>
        </div>
      </Container>
    </S.TopBar>
  )
}
