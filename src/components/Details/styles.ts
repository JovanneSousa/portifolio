import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const DetailsContainer = styled.div`
  background-color: ${colors.fundo};
  border-radius: 8px;
  display: flex;
  border: 1px solid ${colors.border};
  width: 100%;

  .content-modal {
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: space-around;
    padding: 8px 16px;
  }

  .carousel {
    position: relative;
    z-index: 9;
    max-width: 300px;

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

    @media (min-width: ${breakpoints.desktop}) {
      &.dois {
        max-width: 450px;
      }
    }
  }

  .container-img-proj-carousel {
    border-radius: 8px;
    align-self: center;
    img {
      border-radius: 8px;
      max-width: 100%;
    }
  }

  .container-img-proj,
  img {
    object-fit: cover;
    border-radius: inherit;
  }

  .container-img-proj {
    display: none;

    @media (min-width: ${breakpoints.desktop}) {
      display: block;
    }
  }

  p,
  li {
    font-size: 16px;
    color: ${colors.lightGray};
  }

  .desc-modal {
    margin-top: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: scroll;
    scrollbar-width: thin;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    margin: 0;

    .close {
      cursor: pointer;

      &:hover {
        color: ${colors.techcyan};
      }
    }

    p {
      font-size: 32px;
      font-weight: bold;
      background: ${colors.gradientOne};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0;
    }
  }

  .details-title {
    color: ${colors.white};
    font-size: 20px;
    margin-bottom: 12px;
  }

  .freatures {
    ul {
      width: 100%;
      max-height: 150px;
      overflow-y: scroll;
      scrollbar-width: thin;

      li {
        padding: 4px 0;
      }
    }
  }

  .check-icon {
    color: ${colors.techcyan};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    color: ${colors.white};

    &:hover {
      color: ${colors.white};
    }
  }
`
