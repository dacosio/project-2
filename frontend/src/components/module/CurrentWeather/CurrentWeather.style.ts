import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import { CurrentWeatherStyleProps } from "./CurrentWeather.props";


//default state
const widthSize: Record<string, string> = {
  "dashboard" : "100%",
  "weather" : "50%",
  
};
export const Container = styled.div<CurrentWeatherStyleProps>`
  background-image: linear-gradient(
    to right,
    ${({ gradientColor1 }) => gradientColor1},
    ${({ gradientColor2 }) => gradientColor2}
  );
  border-radius: 12px;
  color: white;
  padding: 24px;
  box-sizing: border-box;

  height: 280px;

  @media screen and (max-width: 1200px) {
    padding-bottom: 3rem;
  }

  @media screen and (min-width: 1200px) {

  }
`;
export const AddressDateForecastSVGContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddressDateForecastContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AddressContainer = styled.div`
  display: flex;
  column-gap: 6px;
  align-items: center;
`;

export const DateForecastContainer = styled.div`
  margin-left: 3px;
  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const DateContainer = styled.div``;

export const ForecastContainer = styled.div`
  display: flex;
  @media screen and (min-width: 1200px) {
    ::before {
      content: "|";
      margin-right: 8px;
      margin-left: 8px;
    }
  }
`;

export const SVGContainer = styled.div`
  position: relative;
`;

export const SearchTemperatureLowHighContainer = styled.div`
  position: relative;
  bottom: 0px;

  @media screen and (min-width: 1200px) {
    max-width: 84%;
    position: relative;
    bottom: 20px;
    display: grid;
    grid-template-columns: 70% 30%;
    column-gap: 2rem;
    align-items: center;
  }
`;

export const SearchContainer = styled.div`
@media screen and (min-width: 1200px) {
  position: relative;
  bottom: -20px;
   width: 90%;
}
`;

export const TemperatureLowHighContainer = styled.div`
  display: none;

  @media screen and (min-width: 1200px) {
    display: inline;
    position:absolute;
    bottom: -24px;
    right : 30px;
  }
`;

export const TemperatureLowHighMTContainer = styled.div`
  display:flex;
  flex: 1;
   column-gap:2rem;
  justify-content: space-between;
  align-items:center;

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const LowHighMTContainer = styled.div`
  display: flex;
  flex-direction : column;
  align-items:center;
  row-gap: 4px;
  align-items: center;

  @media screen and (max-width: 500px) {
    position: absolute;
    right: 4rem;
  }

  @media screen and (min-width: 500px) and (max-width: 600px) {
    position: absolute;
    right: 6rem;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    position: absolute;
    right: 6rem;
  }


  
`;
export const TemperatureContainer = styled.div``;


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



/* For Dashboard Only */
export const DashboardContainer = styled.div<CurrentWeatherStyleProps>`
max-width: 660px;
  background-image: linear-gradient(
    to right,
    ${({ gradientColor1 }) => gradientColor1},
    ${({ gradientColor2 }) => gradientColor2}
  );
  border-radius: 12px;
  color: white;
  padding: 20px 20px;

  height: 294px;
  margin-bottom:
`;

export const DashboardTemperatureLowHighContainer = styled.div`
  display:flex;
  flex: 1;
  justify-content: space-between;
  align-items:center;
  column-gap: 2rem;

`;


export const DashboardSearchContainer = styled.div`
  position: relative;
   bottom: 10px;
  margin-top:1rem;

  @media screen and (min-width: 1200px) and (max-width: 1280px) {
    bottom: 26px;  
  }
`;

export const DashboardPrecipitationHumidityWindContainer = styled.div`
display : flex;
justify-content : space-between;
align-item : center;
column-gap :2rem;


@media screen and (max-width: 400px) {
   column-gap :0.7rem;
 }

@media screen and (min-width: 400px) and (max-width: 480px) {
  column-gap :3rem;
 }
@media screen and (min-width: 480px) and (max-width: 768px) {
 column-gap :5rem;
}
`;

export const DashboardPrecipitationContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: end;
`;

export const DashboardHumidityContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: end;
`;

export const DashboardWindContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: end;
`;

export const DashboardSVGContainer = styled.div`
 
  @media screen and (min-width: 1600px) {
    position: absolute;
    right: 6rem;  
  }

  @media screen and (max-width: 1200px) {
    position: absolute;
    right: 2rem;  
  }

  @media screen and (max-width: 400px) {
    position: absolute;
    right: rem;  
  }
`;

export const DashboardLowHighMTContainer = styled.div`
  display: flex;
  flex-direction : column;
  align-items:center;
  row-gap: 4px;
  align-items: center;

  @media screen and (max-width: 500px) {
    position: absolute;
    right: 4rem;
  }

  @media screen and (min-width: 500px) and (max-width: 600px) {
    position: absolute;
    right: 6rem;
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    position: absolute;
    right: 4rem;
  }
`;

export const DashboardDateForecastContainer = styled.div`
  margin-left: 3px;
  @media screen and (min-width: 1281px) {
    display: flex;
  }
`;

export const DashboardForecastContainer = styled.div`
  display: flex;
  @media screen and (min-width: 1281px) {
    ::before {
      content: "|";
      margin-right: 8px;
      margin-left: 8px;
    }
  }
`;

