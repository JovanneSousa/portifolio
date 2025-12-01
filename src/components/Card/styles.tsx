import styled from 'styled-components'
import { colors } from '../../styles'
import { hexToRgb } from '../../utils'

interface CardSectionProps {
  type: 'Frontend' | 'Backend' | 'Database & Tools'
}

export const CardSection = styled.div<CardSectionProps>`
  background: ${colors.gradientTwo};
  border-radius: 16px;
  height: 366px;
  border: 1px solid ${colors.border};
  width: 100%;
  padding: 24px;
  color: ${colors.techcyan};
  transition: all 0.3s ease;

  h4 {
    color: ${colors.white};
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

  &:hover {
    box-shadow: 0 0 30px rgba(${hexToRgb(colors.techcyan)}, 0.5);
  }
`
