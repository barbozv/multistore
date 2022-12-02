import styled from 'styled-components'

type Props = {
  fluid?: boolean
}

export const Container = styled.div<Props>`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;

  @media (min-width: 768px) {
    padding: 0 15px;
  }

  @media (min-width: 1200px) {
    max-width: ${({ fluid }) => (fluid ? '100%' : '1140px')};
  }

  @media (min-width: 1400px) {
    max-width: ${({ fluid }) => (fluid ? '100%' : '1320px')};
  }
`
