'use client'

import styled from 'styled-components'

export const TopBar = styled.div`
  border-bottom: 1px solid var(--color-border);

  .topBar__container {
    display: flex;
    justify-items: center;
    justify-content: space-between;
    padding: 6px 14px;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding: 6px 10px;
    }

    &__user-area {
      width: 240px;
      max-width: 300px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 168px;
      }
    }
  }
`
