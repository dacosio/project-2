import styled from "@emotion/styled";
import { Row } from "react-grid-system";
import { theme } from "utils/Theme";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.btn.color.lightest};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 16px;
  display: grid;
  gap: 32px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding-top: 64px;
  }
`;

export const ListContainer = styled(Row)`
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }

  @media (min-width: 992px) {
    justify-content: space-between;
  }
`;
