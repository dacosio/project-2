import styled from "@emotion/styled";
import { theme } from "utils/Theme";
import { WeatherGeneratedStyleProps } from "./Weather.props";


export const Container = styled.div<WeatherGeneratedStyleProps>`
    max-width: 1021px;
   width: 80vw;
//    border: 2px solid black;
   margin: auto;
   padding: 1.5rem;
   display:flex;
   flex-direction: column;
   row-gap: 2rem;

   @media screen and (min-width: 993px) and  (max-width: 1360px){
    width: ${({ collapseState }) => collapseState ? "80vw" : "calc(80vw - 150px)"};
}  
   `

   export const BottomContainer = styled.div<WeatherGeneratedStyleProps>`
   display:grid;
   max-width: 1021px;
   
    margin: 2rem 0;
    row-gap:16px;
    
     justify-items: center;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        // column-gap : 3rem;
    }

    @media screen and (min-width: 1200px) and  (max-width: 1360px){
        grid-template-columns: ${({ collapseState }) => collapseState ? "repeat(4, 1fr)" : "repeat(2, 1fr)"};
    } 

    @media screen and (min-width: 1361px) {
        grid-template-columns: repeat(4, 1fr);
       
    }
   `


   export const WindContainer = styled.div`
   flex:0.25;`

   export const PrecipitationContainer = styled.div`
   flex:0.25;`

   export const HumidityContainer = styled.div`
   flex:0.25;`

   export const WeatherAlertContainer = styled.div`
   flex:0.25;`





