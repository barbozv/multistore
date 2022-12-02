import Link from 'next/link'
import { socialMedia } from './data'

import * as S from './socialLink.styles'

export function SocialLink() {
  return (
    <S.SocialLink>
      <ul>
        {socialMedia.map(x => (
          <li key={x.name}>
            <Link href={x.url}>{x.icons}</Link>
          </li>
        ))}
      </ul>
    </S.SocialLink>
  )
}
