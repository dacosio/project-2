import styled from "@emotion/styled";
import { Col, Row } from "react-grid-system";
import { theme } from "utils/Theme";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.btn.color.lightest};

  > div > nav {
    background-color: ${({ theme }) => theme.btn.color.lightest};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 16px;
  padding-top: 128px;
  display: grid;
  gap: 32px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding-top: 150px;
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

export const ItemContainer = styled(Col)`
  padding: 64px;

  @media (min-width: 576px) {
    padding: 32px;
  }

  @media (min-width: 768px) {
    padding: 42px;
  }
  
  @media (min-width: 992px) {
    padding: 52px;
  ]
  `;
