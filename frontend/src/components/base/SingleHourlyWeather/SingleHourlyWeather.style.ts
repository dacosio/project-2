import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";


export const Container = styled.div`
  display: grid;
  border: 1px solid ${theme.grey.shade3};
  padding: 12px;
  border-radius: 16px;
  justify-items: stretch;
  align-items: center;
  aspect-ratio: 0.75;
  width: 80px;

  &:hover {
    background-color: ${theme.grey.shade3};
  }
`;

export const WeatherContainer = styled.div`
  justify-self: center;
  line-height: 0;
`;

export const TemperatureContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;