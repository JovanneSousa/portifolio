import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
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

      @media (max-width: ${breakpoints.tablet}) {
        display: none;
      }
    }
    @media (max-width: ${breakpoints.tablet}) {
      padding-left: 0;
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

      @media (max-width: ${breakpoints.tablet}) {
        display: none;
      }
    }

    @media (max-width: ${breakpoints.tablet}) {
      padding-left: 0;
    }
  }

  .timeline-card {
    border: 1px solid ${colors.border};
    border-radius: 8px;
    padding: 24px;
    background: ${colors.gradientTwo};
    transition: 0.3s;

    .flex {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
      gap: 8px;

      .cargo {
        color: ${colors.white};
        font-size: 24px;
        font-weight: bold;
      }

      .empresa {
        color: ${colors.techcyan};
        font-size: 18px;
      }

      @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
      }
    }

    .desc {
      font-size: 18px;
      margin-bottom: 16px;
    }

    .tech {
      span {
        font-size: 16px;
        font-weight: normal;
      }
    }

    &:hover {
      border: 1px solid ${colors.techcyan};
    }
  }
`
