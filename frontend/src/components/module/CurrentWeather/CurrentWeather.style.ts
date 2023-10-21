import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import { CurrentWeatherStyleProps } from "./CurrentWeather.props";

export const Container = styled.div<CurrentWeatherStyleProps>`
  max-width: 1021px;
  width: 100%;
  background-image: linear-gradient(
    to right,
    ${({ gradientColor1 }) => gradientColor1},
    ${({ gradientColor2 }) => gradientColor2}
  );
  border-radius: 12px;
  color: white;
  padding: 20px 36px;

  height: 252px;

  @media screen and (min-width: 1200px) {
    height: 210px;
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
  bottom: -30px;

  @media screen and (min-width: 1200px) {
    max-width: 84%;
    position: relative;
    bottom: 48px;
    display: grid;
    grid-template-columns: 70% 30%;
    column-gap: 2rem;
    align-items: center;
  }
`;

export const SearchContainer = styled.div``;

export const TemperatureLowHighContainer = styled.div`
  display: none;

  @media screen and (min-width: 1200px) {
    display: inline;
  }
`;

export const TemperatureLowHighMTContainer = styled.div`
  @media screen and (min-width: 1200px) {
    display: none;
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
