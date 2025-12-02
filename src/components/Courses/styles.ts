import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { hexToRgb } from '../../utils'

export const CourseContainer = styled.section`
  padding: 40px 0;

  .title-formation {
    color: ${colors.white};
    margin-bottom: 32px;
    font-size: 24px;
    font-weight: bold;
  }

  .container-card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    @media (max-width: ${breakpoints.tablet}) {
      grid-template-columns: 1fr;
    }

    .ens {
      .card {
        grid-template-columns: 1fr 1fr;
      }
    }

    .card {
      padding: 24px;
      border-radius: 8px;
      border: 1px solid ${colors.border};
      background: ${colors.gradientTwo};
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      p {
        padding: 4px 0;
      }

      .title-course {
        color: ${colors.white};
      }

      .info-course {
        font-size: 14px;
      }

      .tech {
        padding-top: 8px;
      }

      .flex {
        display: flex;
        font-size: 12px;
        justify-content: space-between;
        a {
          font-size: 12px;
          color: ${colors.techcyan};

          &:hover {
            background-color: rgba(${hexToRgb(colors.techcyan)}, 0.2);
          }
        }
      }

      &:hover {
        border: 1px solid ${colors.techcyan};

        .title-course {
          color: ${colors.techcyan};
        }
      }
    }
  }
`
