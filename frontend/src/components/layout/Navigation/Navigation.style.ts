import styled from "@emotion/styled";
import { theme } from "utils/Theme";

export const Container = styled.div`
  // display: flex;
  // gap: 4rem;
  // justify-content: center;
  // align-items: center;
  // flex-wrap: wrap;
`;

export const Wrapper = styled.div``;

export const LoginBtn = styled.button`
  background-color: ${theme.brand.primary};
  cursor: pointer;
  font-size: 1.1rem;
  border-radius: 8px;
  &:hover {
    background-color: ${theme.brand.secondary};
    scale: 1.2;
    transition: scale 0.2s ease-in-out;
  }
`;
export const LogOUtBtn = styled.button`
  background-color: ${theme.brand.info};
  cursor: pointer;
  font-size: 1.1rem;
  border-radius: 8px;
  &:hover {
    background-color: ${theme.brand.secondary};
    scale: 1.2;
    transition: scale 0.2s ease-in-out;
  }
`;
