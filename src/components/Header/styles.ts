import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeaderSection = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== 'scrolled'
})<{ scrolled: boolean; open: boolean }>`
  position: sticky;
  top: 0;
  padding: 16px 0;
  transition: background 0.3s ease, border-bottom 0.3s ease;
  z-index: 3;
  backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(7px)' : 'none')};

  background: ${({ scrolled }) =>
    scrolled ? colors.transparent : colors.fundo};

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

      a {
        width: 100%;
        display: flex;
      }

      .white {
        color: ${colors.white};
      }
    }
  }

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 28px;
    height: 20px;
    cursor: pointer;

    span {
      height: 3px;
      background: ${colors.white};
      border-radius: 2px;
      transition: 0.3s;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    nav ul {
      max-height: ${({ open }) => (open ? '500px' : '0')};
      overflow: hidden;
      flex-direction: column;
      position: absolute;
      top: 64px;
      right: 0;
      background: ${({ scrolled }) =>
        scrolled ? colors.transparent : colors.fundo};
      width: 100%;
      padding: ${({ open }) => (open ? '16px' : '0')};
      border-radius: 8px;
      transition: max-height 0.3s ease, padding 0.3s ease;
    }

    .hamburger {
      position: absolute;
      right: 32px;
      top: 30%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 28px;
      height: 20px;
      cursor: pointer;

      span {
        height: 3px;
        background: ${colors.white};
        border-radius: 2px;
        transition: 0.3s;
      }
    }
  }
`
