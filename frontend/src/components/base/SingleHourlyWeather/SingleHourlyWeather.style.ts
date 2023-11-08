import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";


export const Container = styled.button<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 8px;
  justify-items: stretch;
  align-items: center;
  // background: ${(props) => (props.active ? "#FFFFFF" : "#8ECCEF")};
   background: ${(props) => (props.active ? "#FFFFFF" : "#1FB4F4")};
  color: ${(props) => (props.active ? "#000000" : "#FFFFFF")};
  row-gap:1rem;
  justify-content: space-between;
  text-align: center;
  border: none;
    border-radius: ${(props) => (props.active ? "20px" : "0")};
  //  height : ${(props) => (props.active ? "160px" : "132px")};
  // position: ${(props) => (props.active ? "absolute" : "none")};
  //  bottom : ${(props) => (props.active ? "100px" : "none")};
  transition: transform 0.5s;
  transform: scale(${(props) => (props.active ? 1.14 : 1)}); 
  z-index: ${(props) => (props.active ? 2 : 0)};
  padding: 1rem 0;
  //position: ${(props) => (props.active ? "absolute" : "relative")};
  box-shadow: ${(props) => (props.active ? "2px 2px 3px #AFAFB7" : "none")};

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