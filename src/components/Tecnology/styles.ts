import styled from 'styled-components'
import { colors } from '../../styles'

export const TecnologySection = styled.section`
  overflow: hidden;
  padding: 60px 0;
  display: flex;
  align-items: center;

  h2 {
    color: ${colors.black};
    margin-bottom: 16px;
    font-size: 2.25rem;

    span {
      background: ${colors.gradientOne};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  
  .title {
    text-align: center;
    margin-bottom: 64px;
  }

  .card-container {
    display: flex;
    gap: 2rem;
  }

  .card {
        background-color: ${colors.background2};
    border-radius: 16px;
    height: 366px;
    border: 1px solid ${colors.border};
    width: 100%;
  }
`

