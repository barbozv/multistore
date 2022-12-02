'use client'

import * as S from './topBar.styles'

import { SocialLink } from '@/components/socialLink'
import { DropDown } from '@/components/dropDown'

export default function TopBar() {
  return (
    <S.TopBar>
      <div className="topBar__container">
        <SocialLink />
        <div className="topBar__container__user-area">
          <DropDown label="English">portugues</DropDown>
          <DropDown label="Account">Account</DropDown>
        </div>
      </div>
    </S.TopBar>
  )
}
