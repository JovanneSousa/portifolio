import styled from 'styled-components'
import { colors } from '../../styles'

export const AboutSection = styled.section`
  background-color: ${colors.background2};
  height: 90vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

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
    font-size: 1.025rem;

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
    height: 55vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
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
      gap: 0.875rem;

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

  .imageSection {
    border: 4px solid ${colors.purple};
    border-radius: 16px;
    width: 50%;
    height: 55vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .image {
      background: ${colors.gradientOne};
      border-radius: 50%;
      height: 128px;
      width: 128px;
      color: ${colors.white};
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 1.875rem;
      line-height: 2.25rem;
      margin-bottom: 16px;
    }

    h3 {
      color: ${colors.black};
    }

    ul {
      display: flex;

      li:first-child {
        list-style: none;
      }

      li {
        font-size: 0.875rem;
        padding: 6px;
        list-style: disc;
        list-style-position: inside;
      }
    }
  }
`
