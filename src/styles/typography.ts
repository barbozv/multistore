type Params = {
  size: string
  weight: number
  letterSpacing: string
}

export type TypographyType = {
  heading1: Params
  heading2: Params
  heading3: Params
  heading4: Params
  title1: Params
  title2: Params
  subTitle1: Params
  subTitle2: Params
  body1: Params
  body2: Params
  button: Params
  caption: Params
  overline: Params
}

export const Typography: TypographyType = {
  heading1: {
    size: '96px',
    weight: 300,
    letterSpacing: '-1.5px',
  },
  heading2: {
    size: '60',
    weight: 300,
    letterSpacing: '-0.5px',
  },
  heading3: {
    size: '48px',
    weight: 400,
    letterSpacing: '0px',
  },
  heading4: {
    size: '34px',
    weight: 400,
    letterSpacing: '0.25px',
  },
  title1: {
    size: '28px',
    weight: 700,
    letterSpacing: '0px',
  },
  title2: {
    size: '24px',
    weight: 400,
    letterSpacing: '0px',
  },
  subTitle1: {
    size: '16px',
    weight: 400,
    letterSpacing: '0.15px',
  },
  subTitle2: {
    size: '14px',
    weight: 300,
    letterSpacing: '0.1px',
  },
  body1: {
    size: '15px',
    weight: 700,
    letterSpacing: '0.5px',
  },
  body2: {
    size: '14px',
    weight: 500,
    letterSpacing: '0.25px',
  },
  button: {
    size: '14px',
    weight: 700,
    letterSpacing: '1.25px',
  },
  caption: {
    size: '13px',
    weight: 400,
    letterSpacing: '1.25px',
  },
  overline: {
    size: '10px',
    weight: 400,
    letterSpacing: '1.04px',
  },
}
