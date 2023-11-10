import styled from "@emotion/styled";
import { Col, Container, Row } from "react-grid-system";
import { DashboardGeneratedStyleProps } from "./Dashboard.props";

export const Wrapper = styled(Container)<DashboardGeneratedStyleProps>`
  max-width: 1021px;
  width:88vw;
  margin: 32px auto;
  padding: 0 16px;
//   ::-webkit-scrollbar {
//     display: none; 
//  }

  @media screen and (min-width: 993px) and  (max-width: 1436px){
    width: ${({ collapseState }) => collapseState ? "88vw" : "calc(88vw - 200px)"};
}  
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

  // @media (min-width: 768px) {
  //   position: absolute;
  //   // top: 20%;
  //   // right: 3%;
  //   width: 393.39px;
  //   display: flex;
  //   align-items: flex-end;
  //   transform: translateX(calc(375.39px - 123.09px));
  //   z-index: 1;
  //   border-radius: 20px;

  //   > div {
  //     padding-right: 16px;
  //   }

  //   > div > div {
  //     display: grid;
  //     background-color: white;
  //     margin: 1px;
  //     border-radius: 20px;
  //     box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  //   }

  //   > div > div > div {
  //     padding: 32px 16px;
  //   }

  //   > div > div > div:first-of-type {
  //     border-top-left-radius: 20px;
  //     border-top-right-radius: 20px;
  //   }

  //   > div > div > div:last-of-type {
  //     border-bottom-left-radius: 20px;
  //     border-bottom-right-radius: 20px;
  //   }

  //   > div > div > div:not(:last-of-type) {
  //     border-bottom: 1px solid ${({ theme }) => theme.neutral.n20};
  //   }
  // }

  // @media (min-width: 1200px) {
  //   transform: unset;
  // }
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

export const OptionLabel = styled.div``;
