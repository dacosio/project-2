import styled from "@emotion/styled";
import { Col, Container, Row } from "react-grid-system";

export const Wrapper = styled(Container)`
  max-width: 1021px;
  margin: 32px auto;
  padding: 0 16px;
`;

export const Top = styled(Row)`
  // display: flex;
  // justify-content: space-between;
  // gap: 16px;
  margin-bottom: 100px;
`;

export const Segment = styled(Col)`
  // flex: 0.5;
  display: flex;
  flex-direction: column;
  height: 340px;
  row-gap: 1.84rem;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    row-gap: 0.4rem;
  }
`;
export const Weather = styled(Col)`
  // flex: 0.5;
  height: 300px;
  @media screen and (max-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const Middle = styled.div`
  margin-bottom: 32px;
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Crops = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
  gap: 16px;
`;

export const MiddleRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
