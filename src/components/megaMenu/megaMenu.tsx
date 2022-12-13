import { DropDown } from '@/components/dropDown'
import { megaMenu } from './data'
import Link from 'next/link'

import * as S from './megaMenu.styles'

export function MegaMenu() {
    return (
        <S.MegaMenu>
            <nav>
                <ul>
                    {megaMenu.map(x => (
                        <li key={x.name}>
                          <Link href={x.url}>{x.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </S.MegaMenu>
    )
}