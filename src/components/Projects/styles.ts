import styled from 'styled-components'
import { colors } from '../../styles'

export const ProjectsContainer = styled.section`
  background: ${colors.gradientTwo};
  padding: 40px 0;
  z-index: 0;

  .carousel {
    padding-bottom: 40px;
    position: relative;
    z-index: 0;

    .swiper {
      position: relative;
    }

    .swiper-button-prev,
    .swiper-button-next {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      position: absolute;
      top: 40%;
      color: ${colors.techcyan};
      z-index: 1;
    }

    .swiper-button-prev {
      left: 0px;
      transform: scaleX(-1);
    }

    .swiper-button-next {
      right: 0px;
    }

    .swiper-pagination-bullet-active {
      background: ${colors.techcyan};
    }

    .swiper-slide {
      height: auto;
      display: flex;
    }

    .proj {
      border-radius: 8px;
      border: 1px solid ${colors.border};
      display: flex;
      flex-direction: column;
      background: ${colors.gradientTwo};
      width: 100%;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        border: 1px solid ${colors.techcyan};
      }

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
      }
    }
  }
`
