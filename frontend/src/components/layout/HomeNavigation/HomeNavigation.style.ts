import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import Button from "components/base/Button";

export const Container = styled.div``;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  align-items: center;

  border-bottom: 1px solid #d1d1d9;
  background-color: #f4f6f9
  
  @media (min-width: 768px) {
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
  }
`;

export const NavOptions = styled.div`
  ul {
    display: none;
  }
  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
    align-items: center;
    ul {
      list-style: none;
      display: flex;
      gap: 3rem;
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
    gap: 1rem;
  }
`;

export const Hidebutton = styled(Button)`
display:none;
@media (min-width: 768px) {
    display: unset;
    display: flex;   
  }
`;
