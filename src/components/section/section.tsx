import React from 'react'
import * as S from './section.styles'

type SectionProps = React.ComponentProps<typeof S.Section> &
  React.PropsWithChildren<{
    title?: string
  }>

export function Section({ title, children, ...props }: SectionProps) {
  return (
    <S.Section {...props}>
      {title && <S.SectionTitle>{title}</S.SectionTitle>}
      {children}
    </S.Section>
  )
}
