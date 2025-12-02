import styled from 'styled-components'
import { colors } from '../../styles'
import { hexToRgb } from '../../utils'

export const ContainerExperience = styled.section`
  padding: 40px 0;

  .timeline {
    position: relative;
    padding-left: 40px;

    &::before {
      content: '';
      position: absolute;
      left: 16px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: rgba(${hexToRgb(colors.techcyan)}, 0.2);
    }
  }

  .timeline-item {
    position: relative;
    margin-bottom: 48px;
    padding-left: 20px;

    &::before {
      content: '';
      position: absolute;
      left: -30px;
      top: 30px;
      width: 15px;
      height: 15px;
      background: ${colors.techcyan};
      border-radius: 50%;
      box-shadow: 0 0 6px rgba(${hexToRgb(colors.techblue)}, 0.6);
    }
  }

  .timeline-card {
    border: 1px solid ${colors.border};
    border-radius: 8px;
    padding: 16px;
    background: ${colors.gradientTwo};
    transition: 0.3s;

    &:hover {
      border: 1px solid ${colors.techcyan};
    }
  }
`
