import styled from 'styled-components'
import { colors } from '../../styles'

export const AboutSection = styled.section`
  background-color: ${colors.background2};
  height: 100vh;
  text-align: center;
  h2 {
    color: ${colors.black};
    font-size: 2.25rem;
    margin-bottom: 16px;

    span {
      background: ${colors.gradientOne};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .about-section {
    display: flex;
    gap: 3rem;
    margin-top: 64px;

    .description {
        > p {
      margin-bottom: 24px;
      text-align: left;
      font-size: 1.125rem;
      line-height: 1.625rem;

      .java {
        color: ${colors.lightPurple};
        font-weight: bold;
      }

      .react {
        color: ${colors.purple};
        font-weight: bold;
      }
    }
    }
  }

  .description {
    width: 50%;
  }

  .stacks {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    .stack {
      background-color: ${colors.white};
      border-radius: 8px;
      border: 2px solid ${colors.border};
      width: 50%;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 16px;
      gap: .875rem;

        .front {
            color: ${colors.lightPurple};
        }

        .back {
            color: ${colors.purple};
        }

      p {
        font-size: 0.875rem;
      }
    }
  }
`
