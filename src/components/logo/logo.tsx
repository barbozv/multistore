import Image from 'next/image'
import * as S from './logo.styles'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/">
      <S.Logo>
        <Image src="/img/logo.svg" alt="MultiStore" width={200} height={80} priority />
      </S.Logo>
    </Link>
  )
}
