import styled from "@emotion/styled";
import { theme } from "utils/Theme";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.btn.color.lightest};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;
  padding: 16px;
  display: grid;
  gap: 32px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding-top: 64px;
  }
`;
