import styled from 'styled-components'

export const MegaMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 15px;
    background-color: green;

    li {
      font-size: 18px;
      margin-right: 10px;
      list-style: none;

      svg {
        width: 18px;
        height: 18px;
        fill: #000;
        transition: all 0.2s ease;
      }
    }
  }
`
