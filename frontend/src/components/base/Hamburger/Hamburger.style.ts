import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
cursor: pointer;
position: relative;
z-index: 1000;
  width: 1.5rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledBurger = styled.div<{ open: boolean }>`
  width: 1.5rem;
  height: 2rem;
  display: flex;
  flex-flow: column;
  gap: 0.3rem;
  justify-content: center;
  transform-origin: 1px;
  transition: all 0.3s linear;

  div {
    border-radius: 1rem;
    width: 1.5rem;
    height: 0.2rem;
    background-color: ${theme.neutral.n100};

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      position: ${({ open }) => (open ? "relative" : "static")};
      top: ${({ open }) => (open ? "5px" : "0")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      position: ${({ open }) => (open ? "relative" : "static")};
      top: ${({ open }) => (open ? "-11px" : "0")};
    }
  }
`;



