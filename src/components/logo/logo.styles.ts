import styled, { css } from 'styled-components'

export const Logo = styled.div`
  ${({ theme }) => css`
    flex: 1;
    z-index: 1;

    @media (max-width: ${theme.breakpoints.lg}) {
      img {
        width: 120px;
        height: auto;
      }
    }
  `}
`
