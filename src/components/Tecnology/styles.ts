import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const TecnologySection = styled.section`
  overflow: hidden;
  padding: 60px 0;
  display: flex;
  align-items: center;
  
  .card-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    @media (max-width: ${breakpoints.tablet}) {
      grid-template-columns: 1fr;
    }
  }

  .card {
    background-color: ${colors.background2};
    border-radius: 16px;
    height: 366px;
    border: 1px solid ${colors.border};
    width: 100%;
  }
`
