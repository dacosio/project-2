import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import { PrecipitationStyleProps } from "./Precipitation.props";


export const Container = styled.div<PrecipitationStyleProps>`
    display: flex;
    flex:1;
    flex-direction: column;
    gap:24px;
    padding: 16px 16px;
    box-shadow: 0 0 1px 1px ${theme.neutral.n20};
    border-radius: 1.3rem;
    background-color: ${theme.grey.noshade};

    @media screen and (max-width: 400px) {
      width: 88%;
      height:254px;
     }  

    @media screen and (min-width: 400px) and (max-width: 528px) {
      width: 90%;
      height:254px;
     }

    @media screen and (min-width: 528px) and (max-width: 768px) {
     width: 94%;
     height:254px;
    }
 
     @media screen and (min-width: 768px) and (max-width: 1200px) {
      width: 84%;
         height:254px;
         }
 
     @media screen and (min-width: 1200px) {
      gap:12px;
       width: 212px;
     height:212px;
     }
     @media screen and (min-width: 768px) and (max-width: 1200px) {
      justify-self : end;
  }

  @media screen and (min-width: 1200px) and  (max-width: 1360px){
    justify-self : ${({ collapseState }) => collapseState ? "stretch" : "end"};
    width: ${({ collapseState }) => collapseState ? "212px" : "84%"};
  }
`


export const TitleContainer = styled.div`
`

export const PrecipSvgContainer = styled.div`
display: flex;
align-items: end;
justify-content : space-between;
`
