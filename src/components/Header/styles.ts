import styled from 'styled-components'
import { colors } from '../../styles'

interface HeaderProps {
  scrolled: boolean
}

export const HeaderSection = styled.header<HeaderProps>`
  position: sticky;
  top: 0;
  padding: 16px 0;
  height: 10vh;
  transition: background 0.3s ease, border-bottom 0.3s ease;

  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(7px)' : 'none'};

  background: ${({ scrolled }) =>
    scrolled ? colors.transparentWhite : 'transparent'};

  border-bottom: ${({ scrolled }) =>
    scrolled ? `1px solid ${colors.gray}` : 'none'};

  .container {
    display: flex;
    justify-content: space-between;
  }
  h1 {
    background: ${colors.gradientOne};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.5rem;
  }

  ul {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;

    li {
      padding: 8px 16px;
      border-radius: 8px;
    }
  }
`
