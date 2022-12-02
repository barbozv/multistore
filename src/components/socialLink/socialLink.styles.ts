import styled from 'styled-components'

export const SocialLink = styled.nav`
  width: 175px;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      list-style: none;

      svg {
        width: 18px;
        height: 18px;
        fill: #000;
        transition: all 0.2s ease;

        :hover {
          fill: var(--color-primary);
        }
      }
    }
  }
`
