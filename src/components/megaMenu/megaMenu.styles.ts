import styled, { css } from 'styled-components'

export const MegaMenu = styled.nav`
  ${({ theme }) => css`
    flex: 1;
    display: none;

    @media (min-width: ${theme.breakpoints.xl}) {
      display: block;
    }

    ul {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 0 0 0 30px;
      li {
        font-size: 18px;
        margin-right: 10px;
        list-style: none;
        margin-right: 40px;

        a {
          text-decoration: none;
          color: #fff;
        }

        svg {
          width: 18px;
          height: 18px;
          fill: #000;
          transition: all 0.2s ease;
        }
      }
    }
  `}
`
