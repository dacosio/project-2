import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import { WeatherAlertStyleProps } from "./WeatherAlert.props";


export const Container = styled.div<WeatherAlertStyleProps>`
    display: flex;
    flex:0.25;
    flex-direction: column;
    gap: 1.3rem;
    padding: 16px 16px;
    box-shadow: 0 0 1px 1px ${theme.brand.error};
    border-radius: 1.3rem;
    background-color: ${theme.grey.noshade};

   @media screen and (max-width: 768px) {
    width: 94%;
    height:254px;
   }

   @media screen and (min-width: 768px) and (max-width: 1200px) {
    width: 84%;
       height:254px;
       }

   @media screen and (min-width: 1200px) {
     gap: 1.3rem;
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
display:flex;
column-gap: 0.6rem;
margin-top:32px;
align-items: center;

`

export const ContentContainer = styled.div`
margin-top : 18px
`

