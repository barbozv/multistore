import styled, { css } from 'styled-components'

export const Contact = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 150px;
    font-size: 16px;
    margin: 0 150px 0 0;

    @media (max-width: 1533px) {
      display: none;
    }
  `}
`
