import styled from 'styled-components'
import { colors } from '../../styles'

export const AboutSection = styled.section`
  background-color: ${colors.white};
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
  }

  .description {
    width: 50%;
  }
`
