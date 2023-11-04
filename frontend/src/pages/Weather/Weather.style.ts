import styled from "@emotion/styled";
import { theme } from "utils/Theme";


export const Container = styled.div`
    max-width: 1021px;
   width: 80vw;
//    border: 2px solid black;
   margin: auto;
   padding: 1.5rem;
   display:flex;
   flex-direction: column;
   row-gap: 2rem;`

   export const BottomContainer = styled.div`
   display:grid;
   max-width: 1021px;
   
    margin: 2rem 0;
    row-gap:16px;
     justify-items: center;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1200px) {
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





