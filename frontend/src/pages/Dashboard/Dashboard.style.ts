import styled from "@emotion/styled";
import { Col, Container, Row } from "react-grid-system";
import { DashboardGeneratedStyleProps } from "./Dashboard.props";

export const Wrapper = styled(Container)<DashboardGeneratedStyleProps>`
  max-width: 1021px;
  width:88vw;
  margin: 32px auto;
  padding: 0 16px;

  @media screen and (min-width: 993px) and  (max-width: 1436px){
    width: ${({ collapseState }) => collapseState ? "88vw" : "calc(88vw - 200px)"};
}  
`;

export const Top = styled(Row)`
  margin-bottom: 32px;
`;

export const Segment = styled(Col)`
  display: flex;
  flex-direction: column;
  height: 336px;
  justify-content: space-between;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    row-gap: 0.4rem;
  }
`;
export const Weather = styled(Col)`
  height: 300px;
  @media screen and (max-width: 768px) {
    margin-bottom: 36px;
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
  position: relative;
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

export const PopupContainer = styled.div`
  position: absolute;
  > div > div > div {
    cursor: pointer;
    display: flex;
    gap: 16px;
    align-items: center;
    padding: 16px 0;

    :hover {
      background-color: ${({ theme }) => theme.btn.color.lightest};
    }
  }
`;

export const OptionWrapper = styled.div`
  position: absolute;
  bottom: 120%;
  right: 2%;
  background-color: ${(props) => props.theme.btn.text.white};
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0);

  border-radius: 20px;

  z-index: 5;
`;

export const Option = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 32px;
  cursor: pointer;
  &:nth-of-type(1) {
    padding-top: 32px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.neutral.n20};
  }
  &:nth-of-type(2) {
    padding-bottom: 32px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.btn.color.lightest};
  }
`;

export const MobileOption = styled.div`
  display: flex;
  padding: 16px 0;
  gap: 1rem;
`

export const OptionLabel = styled.div``;
