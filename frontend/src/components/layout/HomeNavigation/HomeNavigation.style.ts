import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div``

export const Nav = styled.nav`
display: flex;
padding: 1rem;
justify-content: space-around;
align-items: center;
overflow: hidden;
position: fixed;
top: 0;
width: 100%;
z-index: 1000;
border-bottom: 1px solid #D1D1D9;
background-color: #f4f6f9;
`;

export const NavOptions = styled.div`
display: flex;
gap: 2rem;
align-items: center;
ul {
  list-style: none;
  display: flex;
  gap: 3rem;
}
a{
  text-decoration: none;
  color: #57CB62;
}

`;

export const LoginOptions = styled.div`
display: flex;
gap: 1rem;
`;