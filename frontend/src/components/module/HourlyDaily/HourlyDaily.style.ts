import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import { HourlyDailyStyleProps } from "./HourlyDaily.props";
import Dashboard from "pages/Dashboard";



export const Container = styled.div<HourlyDailyStyleProps>`
 width: 100%;
 box-sizing: border-box;
display:flex;
flex-direction:column;
border: 1px solid ${({ theme }) => theme.neutral.n20};
border-radius: 24px;
padding:1rem;
row-gap:${({ page }) => page === "dashboard" ? "0.2rem" : "0.5rem"};
background : ${({ theme }) => theme.neutral.n0};


`

export const TypographyContainer = styled.div`
padding-bottom: 1rem;
border-bottom : 1px solid ${({ theme }) => theme.neutral.n20};
`

export const WeatherDataContainer = styled.div`
display:flex;
overflow-x: scroll;
overflow-y: hidden;
   padding-bottom: 2rem;
  padding-top:1rem;

border-radius: 20px;
padding-left: 2px; 
  `