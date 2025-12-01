import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  height: 8px;
`;

export const Filler = styled.div<{ value: number; color: string }>`
  width: ${({ value }) => Math.min(Math.max(value, 0), 100)}%;
  background: ${({ color }) => color};
  height: 100%;
  transition: width 0.3s ease;
`;