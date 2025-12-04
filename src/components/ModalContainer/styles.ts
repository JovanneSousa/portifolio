import styled from "styled-components";
import { breakpoints } from "../../styles";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 15px;
  }

  .modal {
    margin: 0 auto;
    max-width: 1024px;
    
    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      margin: 0;
    }
  }
`;
