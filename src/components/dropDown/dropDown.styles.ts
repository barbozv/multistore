'use client'

import styled from 'styled-components'

export const DropDown = styled.div`
  position: relative;
`
export const DropDownSelector = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: all 2s ease-in;

    svg {
      width: 10px;
      height: 10px;
    }
  }

  span {
    font-size: 14px;
    font-weight: 200;
  }

  .open {
    transform: rotate(-180deg);
  }

  .close {
    transform: rotate(0deg);
  }
`
export const DropDownChildren = styled.div<{ visible?: boolean }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: absolute;
  top: 26px;
  left: -20px;
  width: 120px;
  height: 150px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 4px rgb(0 0 0 / 15%);
  padding: 10px;
`
