import * as S from './userAccount.styles'
import Link from 'next/link'
import { userAccount } from './data'
import { Contact } from './contact'

export function UserAccount() {
  return (
    <S.UserAccount>
      <Contact />
      <ul>
        {userAccount.map(x => (
          <li key={x.name}>
            <Link href={x.url}>{x.icons}</Link>
          </li>
        ))}
      </ul>
    </S.UserAccount>
  )
}