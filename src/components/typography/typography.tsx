import styled, { css } from 'styled-components'
import { theme } from '@/styles/theme'

type TypographyType = {
  bold?: boolean
  center?: boolean
  uppercase?: boolean
  variant?:
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'subTitle1'
    | 'subTitle2'
    | 'title1'
    | 'title2'
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'overline'
}

export enum VariantEnum {
  Heading1 = 'heading1',
  Heading2 = 'heading2',
  Heading3 = 'heading3',
  Heading4 = 'heading4',
  Title1 = 'title1',
  Title2 = 'title2',
  SubTitle1 = 'subTitle1',
  SubTitle2 = 'subTitle2',
  Body1 = 'body1',
  Body2 = 'body2',
  Button = 'button',
  Caption = 'caption',
  Overline = 'overline',
}

const textModifiers = {
  heading1: () => css`
    font-size: ${theme.typography.heading1.size};
    font-weight: ${theme.typography.heading1.weight};
    letter-spacing: ${theme.typography.heading1.letterSpacing};
  `,
  heading2: () => css`
    font-size: ${theme.typography.heading2.size};
    font-weight: ${theme.typography.heading2.weight};
    letter-spacing: ${theme.typography.heading2.letterSpacing};
  `,
  heading3: () => css`
    font-size: ${theme.typography.heading3.size};
    font-weight: ${theme.typography.heading3.weight};
    letter-spacing: ${theme.typography.heading3.letterSpacing};
  `,
  heading4: () => css`
    font-size: ${theme.typography.heading4.size};
    font-weight: ${theme.typography.heading4.weight};
    letter-spacing: ${theme.typography.heading4.letterSpacing};
  `,
  subTitle1: () => css`
    font-size: ${theme.typography.subTitle1.size};
    font-weight: ${theme.typography.subTitle1.weight};
    letter-spacing: ${theme.typography.subTitle1.letterSpacing};
  `,
  subTitle2: () => css`
    font-size: ${theme.typography.subTitle2.size};
    font-weight: ${theme.typography.subTitle2.weight};
    letter-spacing: ${theme.typography.subTitle2.letterSpacing};
    line-height: 24px;
  `,
  title1: () => css`
    font-size: ${theme.typography.title1.size};
    font-weight: ${theme.typography.title1.weight};
    letter-spacing: ${theme.typography.title1.letterSpacing};
    margin: 24px 0 24px 0;
  `,
  title2: () => css`
    font-size: ${theme.typography.title2.size};
    font-weight: ${theme.typography.title2.weight};
    letter-spacing: ${theme.typography.title2.letterSpacing};
  `,
  body1: () => css`
    font-size: ${theme.typography.body1.size};
    font-weight: ${theme.typography.body1.weight};
    letter-spacing: ${theme.typography.body1.letterSpacing};
    line-height: 19.5px;
  `,
  body2: () => css`
    font-size: ${theme.typography.body2.size};
    font-weight: ${theme.typography.body2.weight};
    letter-spacing: ${theme.typography.body2.letterSpacing};
  `,
  button: () => css`
    font-size: ${theme.typography.button.size};
    font-weight: ${theme.typography.button.weight};
    letter-spacing: ${theme.typography.button.letterSpacing};
  `,
  caption: () => css`
    font-size: ${theme.typography.caption.size};
    font-weight: ${theme.typography.caption.weight};
    letter-spacing: ${theme.typography.caption.letterSpacing};
  `,

  overline: () => css`
    font-size: ${theme.typography.overline.size};
    font-weight: ${theme.typography.overline.weight};
    letter-spacing: ${theme.typography.overline.letterSpacing};
  `,
}

export const Typography = styled.p<TypographyType>`
  ${({ variant, bold = false, center, uppercase }) => css`
    ${variant === VariantEnum.Heading1 && textModifiers.heading1()};
    ${variant === VariantEnum.Heading2 && textModifiers.heading2()};
    ${variant === VariantEnum.Heading3 && textModifiers.heading3()};
    ${variant === VariantEnum.Heading4 && textModifiers.heading4()};

    ${variant === VariantEnum.Title1 && textModifiers.title1()};
    ${variant === VariantEnum.Title2 && textModifiers.title2()};

    ${variant === VariantEnum.SubTitle1 && textModifiers.subTitle1()};
    ${variant === VariantEnum.SubTitle2 && textModifiers.subTitle2()};

    ${variant === VariantEnum.Body1 && textModifiers.body1()}
    ${variant === VariantEnum.Body2 && textModifiers.body1()}

    ${variant === VariantEnum.Button && textModifiers.button()}
    ${variant === VariantEnum.Caption && textModifiers.caption()}
    ${variant === VariantEnum.Overline && textModifiers.overline()}

    font-weight: ${bold ? '700' : 400};
    text-align: ${center ? 'center' : 'none'};
    text-transform: ${uppercase ? 'uppercase' : 'none'};
  `}
`
