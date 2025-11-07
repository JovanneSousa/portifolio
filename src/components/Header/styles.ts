import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderSection = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== 'scrolled'
})<{ scrolled: boolean }>`
  position: sticky;
  top: 0;
  padding: 16px 0;
  transition: background 0.3s ease, border-bottom 0.3s ease;

  backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(7px)' : 'none')};

  background: ${({ scrolled }) =>
    scrolled ? colors.transparentWhite : 'transparent'};

  border-bottom: ${({ scrolled }) =>
    scrolled ? `1px solid ${colors.border}` : 'none'};

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

      .white {
        color: ${colors.white};
      }
    }
  }
`
