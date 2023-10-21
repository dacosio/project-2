import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div``;

export const NavBackground = styled.div`
  transition: opacity 0.7s ease-in-out;
  height: 100vh;
  background-color: ${theme.neutral.n100};

  &.visible {
    opacity: 0.6;
  }

  &.hidden {
    opacity: 0;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${theme.bg.tertiary};
  z-index: 5;
  transition: transform 0.7s ease-in-out;
  border-bottom: 1px solid ${theme.neutral.n10};

  &.visible {
    z-index: 5;
    transform: translateY(92px);
  }

  &.hidden {
    z-index: 5;
    transform: translateY(-100%);
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavOptions = styled.div`
  display: flex;
  padding: 1rem 2rem;
  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    flex-flow: column;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: ${theme.brand.primary};
    justify-content: center;
  }
`;
