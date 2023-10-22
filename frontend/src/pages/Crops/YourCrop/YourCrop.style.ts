import styled from "@emotion/styled";
import { Col, Row } from "react-grid-system";
import { theme } from "utils/Theme";

export const Container = styled.div`
  display: grid;
  margin: auto;
  padding: 16px;
  background-color: white;
  gap: 32px;

  @media (min-width: 768px) {
    background-color: inherit;
    padding: 32px;
  }
`;

export const Wrapper = styled(Row)`
  width: 100%;
  justify-content: center;
  justify-self: center;

  @media (min-width: 768px) {
    height: calc(100vh - 143px);
  }
`;

export const ListColumnContainer = styled(Col)`
  width: 100%;

  @media (min-width: 768px) {
    padding: 0 8px;
    height: 100%;
  }
`;

export const DetailColumnContainer = styled(Col)`
  width: 100%;

  > div {
    display: grid;
    gap: 16px;
    overflow-y: auto;
  }

  @media (min-width: 768px) {
    padding: 0 8px;
    height: 100%;
  }
`;
