import styled from 'styled-components'
import { colors } from '../../styles'

export const DetailsContainer = styled.div`
  background-color: ${colors.fundo};
  border-radius: 8px;
  max-width: 850px;
  max-height: 650px;
  display: flex;
  border: 1px solid ${colors.border};

  .content-modal {
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: space-around;
    padding: 8px 16px;
  }

  .container-img-proj,
  img {
    max-height: 650px;
    object-fit: cover;
    border-radius: inherit;
  }

  p,
  li {
    font-size: 16px;
    color: ${colors.lightGray};
  }

  .desc-modal {
    margin-top: 16px;
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
