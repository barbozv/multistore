import * as S from './topBar.styles'
import { SocialLink } from '@/components/socialLink'

export default function TopBar() {
  return (
    <S.TopBar>
      <div className="topBar__container">
        <SocialLink />
      </div>
    </S.TopBar>
  )
}
