import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import { HumidityStyleProps } from "./Humidity.props";


export const Container = styled.div<HumidityStyleProps>`
    display: flex;
    flex:0.25;
    flex-direction: column;
    // justify-content: space-between;
     gap: 2rem;
    padding: 16px 16px;
    box-shadow: 0 0 1px 1px ${theme.neutral.n20};
    border-radius: 1.3rem;
    background-color: ${theme.grey.noshade};
    //width: 212px;
    //height:212px;

    @media screen and (max-width: 768px) {
      width: 94%;
      height:254px;
      // align-items: center;
      // padding: 32px 32px;
     }
 
     @media screen and (min-width: 768px) and (max-width: 1200px) {
      width: 84%;
         height:254px;
         }
 
     @media screen and (min-width: 1200px) {
      gap: 0.8rem;
       width: 212px;
     height:212px;
     }

     @media screen and (min-width: 768px) and (max-width: 1200px) {
      justify-self : start;
  }

  @media screen and (min-width: 1200px) and  (max-width: 1360px){
    justify-self : ${({ collapseState }) => collapseState ? "stretch" : "start"};
    width: ${({ collapseState }) => collapseState ? "212px" : "84%"};
  }
`

export const SvgContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
`