import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  .menu {
    position: relative;
    list-style: none;
    text-align: center;
    white-space: normal;
    height: 50px;

    &__item {
      &--mega-menu,
      &--simple {
        display: inline-block;
        white-space: normal;

        a {
          display: block;
          font-size: 16px;
          font-weight: 600;
          line-height: 20px;
          padding: 20px 20px;

          transition: 0.2s;
          text-decoration: none;
          letter-spacing: 0.1px;
          color: #282828;

          :hover {
            color: #fff;
          }

          :not(:only-child):after {
            content: '>';
            top: 1px;
            padding-left: 2px;
            font-size: 13px;
          }

          &.active {
            color: #fff;
          }
        }
      }

      &--mega-menu {
        .submenu {
          display: none;
        }
      }

      &--mega-menu:hover .submenu {
        position: absolute;
        display: flex;
        width: 100%;
        background: #fff;
        border-radius: 8px;
        display: block;
        border: 1px solid #ccc;
        padding: 20px;
        z-index: 2;

        .image-container {
          width: 320px;
          height: 320px;
          border: 1px solid #7a7a7a;
        }
      }
    }
  }
`
