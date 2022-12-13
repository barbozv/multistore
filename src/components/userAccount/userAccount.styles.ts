import styled, { css } from 'styled-components'

export const UserAccount = styled.div`
  ${({ theme }) => css`
    flex: 1;
    width: 300px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: ${theme.breakpoints.xl}) {
      width: 180px;
      margin-left: 14px;
    }

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        list-style: none;
        margin: 0 80px 0 0;
        :last-child {
          margin-right: 30px;
        }

        svg {
          width: 30px;
          height: 30px;
          fill: #fff;
        }

        @media (max-width: ${theme.breakpoints.xl}) {
          margin: 0 0 0 12px;

          :last-child {
            margin-right: 0;
          }

          svg {
            width: 22px;
            height: 22px;
          }
        }
      }
    }
  `}
`
