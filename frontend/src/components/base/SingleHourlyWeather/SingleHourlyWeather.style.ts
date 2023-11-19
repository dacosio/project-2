import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import { SingleHourlyWeatherStyleProps } from "./SingleHourlyWeather.props";


export const Container = styled.button<SingleHourlyWeatherStyleProps>`
  display: flex;
  flex-direction: column;
  padding: 8px;
  justify-items: stretch;
  align-items: center;
   background: ${(props) => (props.active ? "#FFFFFF" : "#1FB4F4")};
  color: ${(props) => (props.active ? "#000000" : "#FFFFFF")};
  row-gap: ${(props) => (props.active ? "0.6rem" : "1rem")}; 
  padding-top: ${(props) => (props.active ? "0.9rem" : "8px")}; 
  padding-bottom: ${(props) => (props.active ? "0.9rem" : "8px")}; 
  justify-content: space-between;
  text-align: center;
  border: none;
    border-radius: ${(props) => (props.active ? "20px" : "0")};
  transition: transform 0.5s;
  transform: scale(${(props) => (props.active ? 1.14 : 1)}); 
  z-index: ${(props) => (props.active ? 2 : 0)};
  box-shadow: ${(props) => (props.active ? `3px 1px 5px ${theme.neutral.n30}` : 0)};

  

  &:hover {
    background-color: #FFFFFF;
    color: black !important; 
    cursor:pointer;
  }
`;

export const WeatherContainer = styled.div`
`;

export const TemperatureContainer = styled.div`
`;

export const TimeContainer = styled.div`
width: 88px;
`;

export const DayNameDateContainer = styled.div`
text-align: center;
width: 88px;
`;


export const DayNameContainer = styled.div`
`;


export const DayDateContainer = styled.div`
`;