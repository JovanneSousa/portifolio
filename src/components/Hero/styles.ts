import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: #0d1117;
  color: #f8fafc;
  min-height: calc(100vh - 70px);
  gap: 32px;

  .hi {
    font-weight: bold;
    font-size: 22px;
  }

  .dev {
    font-size: 72px;
    font-weight: bold;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 48px;
    }
  }

  .color {
    background: ${colors.gradientOne};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .desc {
    color: ${colors.gray};
    font-size: 24px;
    max-width: 650px;

        @media (max-width: ${breakpoints.tablet}) {
      font-size: 18px;
    }
  }

  .buttonContainer {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 16px;

    a {
      text-decoration: none;
      padding: 12px 32px;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
    }

    .is-active {
      color: ${colors.black};
    }
  }

  .background {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .circle {
    position: absolute;
    width: 24rem;
    height: 24rem;
    border-radius: 50%;
    filter: blur(60px);
    animation: pulse 4s ease-in-out infinite;
  }

  .circle1 {
    top: 25%;
    left: 25%;
    background: rgba(61, 139, 253, 0.3);
  }

  .circle2 {
    bottom: 25%;
    right: 25%;
    background: rgba(30, 203, 225, 0.3);
    animation-delay: 2s;
  }

  .content {
    position: relative;
    z-index: 1;
    text-align: center;
    animation: fadeIn 1.5s ease-out forwards;
    max-width: 100%;

    @media (max-width: ${breakpoints.tablet}) {
      padding: 0 16px;
    }
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.7;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-12px);
    }
  }
`
