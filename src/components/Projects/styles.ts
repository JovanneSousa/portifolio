import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { hexToRgb } from '../../utils'

export const ProjectsContainer = styled.section`
  background: ${colors.gradientTwo};
  padding: 40px 0;

  .container-proj {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    .proj {
      border-radius: 8px;
      border: 1px solid ${colors.border};
      display: flex;
      flex-direction: column;
      background: ${colors.gradientTwo};
      overflow: hidden;
      cursor: pointer;

      .container-img-proj img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: inherit;
      }

      .content {
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;

        .system-name {
          color: ${colors.white};
          margin-bottom: 8px;
        }

        .sys-desc {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 24px;
        }

        .tech {
          display: flex;
          gap: 10px;
          margin-bottom: 16px;

          span {
            background-color: rgba(${hexToRgb(colors.techcyan)}, 0.2);
            border: 1px solid ${colors.techcyan};
            border-radius: 16px;
            padding: 2px 10px;
            color: ${colors.techcyan};
            font-weight: bold;
            font-size: 12px;
          }
        }
      }
    }

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
  }
`
