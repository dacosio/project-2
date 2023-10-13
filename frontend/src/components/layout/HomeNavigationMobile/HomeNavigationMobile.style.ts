import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
margin-top: 10rem;
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