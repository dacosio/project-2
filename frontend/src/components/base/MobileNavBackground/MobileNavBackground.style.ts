import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
`;

export const NavBackground = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.neutral.n100};
  transition: opacity 0.7s ease-in-out;
  opacity: ${({ open }) => (open ? "0.6" : "0")};
  display: ${({ open }) => (open ? "unset" : "none")};
  cursor: ${({ open }) => (open ? "pointer" : "pointer")};
`;
