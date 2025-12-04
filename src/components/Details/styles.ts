import styled from 'styled-components'
import { colors } from '../../styles'

export const DetailsContainer = styled.div`
  padding: 24px;
  background-color: ${colors.fundo};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  p,
  li {
    font-size: 16px;
    color: ${colors.lightGray};
  }

  .flex {
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;

    p {
      font-size: 32px;
      font-weight: bold;
      background: ${colors.gradientOne};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 16px;
    }
  }

  .details-title {
    color: ${colors.white};
    font-size: 20px;
  }

  .freatures {
  }

  .check-icon {
    color: ${colors.techcyan};
  }
`
