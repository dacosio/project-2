import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import { WeatherTipStyleProps } from "./WeatherTip.props";


export const Container = styled.div<WeatherTipStyleProps>`
    display: flex;
    flex:0.25;
    flex-direction: column;
     gap: 40px;
    padding: 16px 16px;
    box-shadow: 0 0 1px 1px ${theme.neutral.n20};
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
    gap: 20px;
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

export const TopContainer = styled.div`
    display : flex;
    justify-content: space-between;
    padding-top: 1rem;
    align-items: center;
`
export const  BottomContainer = styled.div`
    
`