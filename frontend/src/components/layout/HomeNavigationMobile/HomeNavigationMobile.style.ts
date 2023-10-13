import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
margin-top: 10rem;
`

export const NavOptions = styled.div`
display: flex;
gap: 2rem;
padding: 1rem;
ul {
  list-style: none;
  display: flex;
  gap: 3rem;
  flex-flow: column;
  padding: 0;
}
a{
  text-decoration: none;
  color: #57CB62;
  justify-content: center;
}
`;