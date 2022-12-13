import styled from 'styled-components'

export const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  z-index: 1;

  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    width: 100%;
  }
`
