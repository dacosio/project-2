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
`;

export const Segment = styled(Col)`
  // flex: 0.5;
  height: 300px;
`;
export const Weather = styled(Col)`
  // flex: 0.5;
  height: 300px;
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

export const Carousel = styled.div`
  border: 1px solid red;
`;

