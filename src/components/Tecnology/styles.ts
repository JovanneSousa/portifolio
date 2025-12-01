import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const TecnologySection = styled.section`
  overflow: hidden;
  padding: 60px 0;
  display: flex;
  align-items: center;

  h2 {
    color: ${colors.white};
    margin-bottom: 16px;
    font-size: 48px;

    span {
      background: ${colors.gradientOne};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  p {
    font-size: 22px;
  }

  .title {
    text-align: center;
    margin-bottom: 64px;
  }

  .card-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    @media (max-width: ${breakpoints.tablet}) {
      grid-template-columns: 1fr;
    }
  }

  .card {
    background-color: ${colors.background2};
    border-radius: 16px;
    height: 366px;
    border: 1px solid ${colors.border};
    width: 100%;
  }
`
