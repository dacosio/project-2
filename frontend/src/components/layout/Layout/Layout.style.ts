import styled from "utils/styled";
import { theme } from "utils/Theme";

export const Container = styled.div`
  margin: 1rem auto;
  width: 50%;

  border: 3px solid green;
  padding: 10px;
  text-align: center;
`;
export const Header = styled.div``;

export const Wrapper = styled.div`
  margin: 5rem auto;
  width: 50%;
  color: crimson;
  padding: 10px;
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: ${theme.brand.primary};
`;
