import styled from 'styled-components'

export const Burger = styled.div`
  display: none;
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: inline-block;
  }
`
