import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";


export const Container = styled.button<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 8px;
  justify-items: stretch;
  align-items: center;
  background: ${(props) => (props.active ? "#FFFFFF" : "#8ECCEF")};
  color: ${(props) => (props.active ? "#000000" : "#FFFFFF")};
  row-gap:1rem;
  justify-content: space-between;
  text-align: center;
  border: none;
  border-radius: ${(props) => (props.active ? "20px" : "none")};
   height : ${(props) => (props.active ? "160px" : "132px")};
  //  position: ${(props) => (props.active ? "relative" : "none")};
  //  bottom : ${(props) => (props.active ? "100px" : "none")};
   z-index : 9999999;

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