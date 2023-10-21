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
  TemperatureLowHighMTContainer,
  TemperatureContainer,
  LowHighContainer,
  LowContainer,
  HighContainer,
  SearchContainer,
} from "./CurrentWeather.style";
import { Clear, Cloudy, LocationSvg, Snow } from "../../base/SVG";
import LocationSearch from "../LocationSearch";
import Typography from "../../base/Typography";
import CurrentDate from "../../base/CurrentDate";

const CurrentWeather = (props: CurrentWeatherProps): JSX.Element => {
  const {
    currentLocation,
    forecast,
    currentTemperature,
    lowTemperature,
    highTemperature,
    gradientColor1,
    gradientColor2,
    currentCondition,
    ...currentWeatherProps
  } = props;

  return (
    <Container gradientColor1={gradientColor1} gradientColor2={gradientColor2}>
      <AddressDateForecastSVGContainer>
        <AddressDateForecastContainer>
          <AddressContainer>
            <LocationSvg width={22} height={22} fill="#FFFFFF" />
            <Typography variant="title3" textColor="white">
              {currentLocation}{" "}
            </Typography>
          </AddressContainer>
          <DateForecastContainer>
            <DateContainer>
              {" "}
              <Typography variant="body" textColor="white">
                <CurrentDate />
              </Typography>
            </DateContainer>
            <ForecastContainer>
              <Typography variant="body" textColor="white">
                {forecast}
              </Typography>
            </ForecastContainer>
          </DateForecastContainer>
          <TemperatureLowHighMTContainer>
            <TemperatureContainer>
              <Typography variant="title3" textColor="white">
                {currentTemperature}°C
              </Typography>{" "}
            </TemperatureContainer>
            <LowHighContainer>
              <LowContainer>
                <Typography variant="small" textColor="white">
                  Low
                </Typography>{" "}
                <Typography variant="title5" textColor="white">
                  {lowTemperature}°C
                </Typography>{" "}
              </LowContainer>
              <HighContainer>
                <Typography variant="small" textColor="white">
                  High
                </Typography>{" "}
                <Typography variant="title5" textColor="white">
                  {highTemperature}°C
                </Typography>{" "}
              </HighContainer>
            </LowHighContainer>
          </TemperatureLowHighMTContainer>
        </AddressDateForecastContainer>
        <SVGContainer>
          {currentCondition === "clear" ? (
            <Clear width={160} height={160} />
          ) : currentCondition === "partiallyCloudy" ? (
            <Clear width={160} height={160} />
          ) : currentCondition === "snow" ? (
            <Snow width={160} height={160} />
          ) : (
            <Cloudy width={160} height={160} />
          )}
        </SVGContainer>
      </AddressDateForecastSVGContainer>

      <SearchTemperatureLowHighContainer>
        <SearchContainer>
          <LocationSearch></LocationSearch>
        </SearchContainer>

        <TemperatureLowHighContainer>
          <TemperatureContainer>
            <Typography variant="title1" textColor="white">
              {currentTemperature}°C
            </Typography>{" "}
          </TemperatureContainer>
          <LowHighContainer>
            <LowContainer>
              <Typography variant="small" textColor="white">
                Low
              </Typography>{" "}
              <Typography variant="title4" textColor="white">
                {lowTemperature}°C
              </Typography>{" "}
            </LowContainer>
            <HighContainer>
              <Typography variant="small" textColor="white">
                High
              </Typography>{" "}
              <Typography variant="title4" textColor="white">
                {highTemperature}°C
              </Typography>{" "}
            </HighContainer>
          </LowHighContainer>
        </TemperatureLowHighContainer>
      </SearchTemperatureLowHighContainer>
    </Container>
  );
};

export default React.memo(CurrentWeather);
