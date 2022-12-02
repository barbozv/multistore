import styled from 'styled-components'

type Props = {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
}

export const Column = styled.div<Props>`
  display: block;
  padding: 0 10px;
  width: 100%;

  @media (min-width: 0) {
    width: ${({ xs }) => (xs ? `calc(100 / 12 * ${xs}%)` : '')};
  }

  @media (min-width: 576px) {
    width: ${({ sm }) => (sm ? `calc(100 / 12 * ${sm}%)` : '')};
  }

  @media (min-width: 768px) {
    width: ${({ md }) => (md ? `calc(100 / 12 * ${md}%)` : '')};
    padding: 0 15px;
  }

  @media (min-width: 992px) {
    width: ${({ lg }) => (lg ? `calc(100 / 12 * ${lg}%)` : '')};
  }

  @media (min-width: 1200px) {
    width: ${({ xl }) => (xl ? `calc(100 / 12 * ${xl}%)` : '')};
  }

  @media (min-width: 1400px) {
    width: ${({ xxl }) => (xxl ? `calc(100 / 12 * ${xxl}%)` : '')};
  }
`
