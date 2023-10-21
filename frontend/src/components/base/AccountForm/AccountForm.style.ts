import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
`;

export const Form = styled.div`
  p {
    font-size: 14px;
    color: ${theme.neutral.n80};
  }
  button{
    p{
      color: unset;
    }
  }
  display: grid;
  gap: 1rem;
`;