import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  text-align: center;
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;

  .titleContainer {
    margin-bottom: 24px;
  }

  .title {
    color: ${colors.black};
    font-size: 5rem;
  }

  .subTitle {
    background: ${colors.gradientOne};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 4.5rem;
  }

  .buttonContainer {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  a {
    text-decoration: none;

    padding: 12px 32px;
    border-radius: 8px;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin-bottom: 32px;
  }
`
