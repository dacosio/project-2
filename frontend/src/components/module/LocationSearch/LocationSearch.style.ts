import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
  position: relative;
`;

export const ResultsContainer = styled.div`
  position: absolute;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: ${({ theme }) => theme.bg.primary};
  margin-top: 6px;
  cursor: pointer;
`;
