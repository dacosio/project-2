import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  justify-items: stretch;
  align-items: center;
  width: 80px;
  background-color: #8ECCEF;
  color: white !important; 
  row-gap:1rem;

  &:hover {
    background-color: #FFFFFF;
  }
`;

export const WeatherContainer = styled.div`
`;

export const TemperatureContainer = styled.div`
`;