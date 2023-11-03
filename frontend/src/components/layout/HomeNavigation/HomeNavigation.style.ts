import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import Button from "../../base/Button";


export const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1000;
  top:0;
`;

export const Nav = styled.nav`
  position: relative;
  z-index: 1000;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  align-items: center;

  border-bottom: 1px solid ${theme.neutral.n10};
  background-color: #f4f6f9;

  @media (min-width: 768px) {
    align-items: center;
    overflow: hidden;
    top: 0;
    width: 100%;
  }
`;

export const NavOptions = styled.div`
  ul {
    display: none;
    padding-left: 0;
  }
  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
    align-items: center;
    ul {
      list-style: none;
      display: flex;
      gap: 2rem;
    }
    a {
      text-decoration: none;
      color: #57cb62;
    }
  }
`;

export const LoginOptions = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`;

export const Hidebutton = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: unset;
    display: flex;
  }
`;

export const Logo = styled.a`
  display: flex;
`;
