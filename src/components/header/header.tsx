import * as S from './header.styles'

import { MegaMenu } from '@/components/megaMenu'
import { DropDown } from '@/components/dropDown'

export function Header() {
    return (
        <S.Header>
            <nav className=" header__container">
                <MegaMenu />
            </nav>
        </ S.Header>
    )
}