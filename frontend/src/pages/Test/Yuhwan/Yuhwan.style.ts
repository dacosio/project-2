import styled from "@emotion/styled";
import { theme } from "utils/Theme";

export const Container = styled.div`
  display: grid;
  gap: 32px;
  padding: 3rem;
`;

export const Form = styled.form`
  display: grid;
`;

export const ListContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;
