import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div``;

export const ResultsContainer = styled.div`
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: ${({ theme }) => theme.bg.primary};
  margin-top: 6px;

  > div {
    cursor: pointer;

    :not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.neutral.n10};
    }
  }
`;
