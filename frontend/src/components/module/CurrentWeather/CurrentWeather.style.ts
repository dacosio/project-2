import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
    max-width: 80vw;
    width: 100%;
    background-color: #8ECCEF;
    border-radius: 12px;
    color: white;
    padding: 20px 36px ;
    height: 210px;

    
`
export const AddressDateForecastSVGContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddressDateForecastContainer = styled.div`
display:flex;
flex-direction: column;
// border: 1px solid black;
gap:1rem;
`;

export const AddressContainer = styled.div`
// border: 1px solid black;
display: flex:
column-gap: 1rem;
`;

export const DateForecastContainer = styled.div`
@media screen and (min-width: 1200px) {
  display:flex; 
// border: 1px solid black;
}
`;

export const DateContainer = styled.div`
 
`;

export const ForecastContainer = styled.div`
@media screen and (min-width: 1200px) {
  ::before {
    content: "|";
    margin-right: 8px; 
    margin-left: 8px; 
}
}
`;

export const SVGContainer = styled.div`
// border: 1px solid black;
`;

export const SearchTemperatureLowHighContainer = styled.div`
   


   @media screen and (min-width: 1200px) {
    max-width: 84%;
  //  border: 1px solid black;
   display:grid;
   grid-template-columns : 70% 30%;
   column-gap: 2rem;
   align-items: center;
  }

`;

export const SearchContainer = styled.div`
`;

export const TemperatureLowHighContainer = styled.div`
display: none;

@media screen and (min-width: 1200px) {
    display: inline;
}

`;
export const TemperatureContainer = styled.div`
`;
export const LowHighContainer = styled.div`
display: flex;
row-gap: 4px;
column-gap: 10px;
align-items: center;
`;


export const LowContainer = styled.div`
display: flex;
gap: 4px;
align-items: center;
`;


export const HighContainer = styled.div`
display: flex;
gap: 4px;
align-items: center;
`;




