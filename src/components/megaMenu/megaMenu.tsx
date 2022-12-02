import { DropDown } from '@/components/dropDown'
import { megaMenu } from './data'

import * as S from './megaMenu.styles'

export function MegaMenu() {
    return (
        <S.MegaMenu>
            <nav>
                <ul>
                    {megaMenu.map(x => (
                        <li key={x.name}>
                            {x.name}
                        </li>
                    ))}
                </ul>
            </nav>
        </S.MegaMenu>
    )
}