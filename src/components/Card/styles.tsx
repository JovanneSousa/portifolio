import styled from 'styled-components'
import { colors } from '../../styles'

interface CardSectionProps {
  type: 'Frontend' | 'Backend' | 'Database & Tools'
}

export const CardSection = styled.div<CardSectionProps>`
  background-color: ${colors.background2};
  border-radius: 16px;
  height: 366px;
  border: 1px solid ${colors.border};
  width: 100%;
  padding: 24px;
  color: ${({ type }) =>
    type === 'Frontend'
      ? colors.purple
      : type === 'Backend'
      ? colors.lightPurple
      : type === 'Database & Tools'
      ? colors.black
      : colors.gray};

  h4 {
    color: ${colors.black};
    font-size: 0.925rem;
  }

  h3 {
    margin-bottom: 24px;
  }

  .stack {
    margin-bottom: 16px;
  }

  .title-bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .porcent {
    color: ${colors.gray};
    font-size: 0.925rem;
  }
`
