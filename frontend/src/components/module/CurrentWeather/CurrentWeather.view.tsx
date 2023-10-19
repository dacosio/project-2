import React from "react";
import { CurrentWeatherProps } from "./CurrentWeather.props";
import {
  Container,
  AddressDateForecastContainer,
  AddressDateForecastSVGContainer,
  AddressContainer,
  DateForecastContainer,
  DateContainer,
  ForecastContainer,
  SVGContainer,
  SearchTemperatureLowHighContainer,
  TemperatureLowHighContainer,
  TemperatureContainer,
  LowHighContainer,
  LowContainer,
  HighContainer,
  SearchContainer,
} from "./CurrentWeather.style";
import { Cloudy, LocationSvg } from "../../base/SVG";
import LocationSearch from "../LocationSearch";
import Typography from "../../base/Typography";

const CurrentWeather = (props: CurrentWeatherProps): JSX.Element => {
  return (
    <Container>
      <AddressDateForecastSVGContainer>
        <AddressDateForecastContainer>
          <AddressContainer>
            <LocationSvg width={20} height={20} />
            <Typography variant="title3" textColor="white">
              Vancouver, BC{" "}
            </Typography>
          </AddressContainer>
          <DateForecastContainer>
            <DateContainer> Sat, Dec 1, 2023</DateContainer>
            <ForecastContainer>Partly Cloudy</ForecastContainer>
          </DateForecastContainer>
        </AddressDateForecastContainer>
        <SVGContainer>
          <Cloudy width={120} height={120} />
        </SVGContainer>
      </AddressDateForecastSVGContainer>

      <SearchTemperatureLowHighContainer>
        <SearchContainer>
          <LocationSearch></LocationSearch>
        </SearchContainer>

        <TemperatureLowHighContainer>
          <TemperatureContainer>
            <Typography variant="title1" textColor="white">
              24°C
            </Typography>{" "}
          </TemperatureContainer>
          <LowHighContainer>
            <LowContainer>
              <Typography variant="small" textColor="white">
                Low
              </Typography>{" "}
              <Typography variant="title4" textColor="white">
                18°C
              </Typography>{" "}
            </LowContainer>
            <HighContainer>
              <Typography variant="small" textColor="white">
                High
              </Typography>{" "}
              <Typography variant="title4" textColor="white">
                26°C
              </Typography>{" "}
            </HighContainer>
          </LowHighContainer>
        </TemperatureLowHighContainer>
      </SearchTemperatureLowHighContainer>
    </Container>
  );
};

export default React.memo(CurrentWeather);
