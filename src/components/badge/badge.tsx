import styled from 'styled-components'

export const Badge = styled.div`
  position: absolute;
  border-radius: 50%;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: #fd682d;
  width: 15px;
  height: 15px;
  top: -4px;
  right: -6px;
  font-size: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
`
