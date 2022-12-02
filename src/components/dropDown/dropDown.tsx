'use client'

import { useCallback } from 'react'
import { SlArrowDown } from 'react-icons/sl'
import clsx from 'clsx'

import * as S from './dropDown.styles'
import useComponentVisible from '@/shared/hooks/useComponentVisible'

type DropDownProps = React.PropsWithChildren<{
  label: string
}>

export function DropDown({ label, children }: DropDownProps) {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)

  return (
    <S.DropDown ref={ref}>
      <S.DropDownSelector
        onClick={useCallback(() => setIsComponentVisible(!isComponentVisible), [isComponentVisible, setIsComponentVisible])}>
        <span>{label}</span>
        <button>
          <SlArrowDown className={clsx({ open: isComponentVisible, close: !isComponentVisible })} />
        </button>
      </S.DropDownSelector>
      <S.DropDownChildren visible={isComponentVisible}>{children}</S.DropDownChildren>
    </S.DropDown>
  )
}
