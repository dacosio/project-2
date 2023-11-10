import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import { Form } from "formik";

export const Container = styled.div``;

export const FormContainer = styled.div`
  p:first-child {
    font-size: 14px;
    font-weight: 400px
    color: ${theme.neutral.n80};
  }
  
  display: grid;
  gap: 1rem;
  justify-items: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;
