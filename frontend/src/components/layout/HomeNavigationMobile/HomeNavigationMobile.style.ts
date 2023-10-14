import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
background-color: ${theme.brand.accent};
z-index: 5;
transition: transform 5s ease-in-out;

&.visible {
  z-index: 5;
  transform: translateY(92px);
}

&.hidden {
  z-index: 5;
  transform: translateY(-100%);
}
`

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
a{
  text-decoration: none;
  color: ${theme.brand.primary};
  justify-content: center;
}
`;