import React from "react";
import { DailyWeatherProps } from "./DailyWeather.props";
import {
  Container,
  TemperatureContainer,
  WeatherContainer,
} from "./DailyWeather.style";
import Typography from "../Typography";
import { Cloudy, Rainy, Sunny } from "../../../../src/components/base/SVG";

const DailyWeather = (props: DailyWeatherProps): JSX.Element => {
  const { day, weather, max, min } = props;

  return (
    <Container>
      <Typography variant="title5" weight="700" align="center">
        {day}
      </Typography>
      <WeatherContainer>
        {weather === "Cloudy" ? (
          <Cloudy width={50} height={50} />
        ) : weather === "Rainy" ? (
          <Rainy width={50} height={50} />
        ) : (
          <Sunny width={50} height={50} />
        )}
      </WeatherContainer>
      <TemperatureContainer>
        <Typography variant="body" align="center">
          {max}℃
        </Typography>
        <Typography variant="body" align="center">
          {min}℃
        </Typography>
      </TemperatureContainer>
    </Container>
  );
};

export default React.memo(DailyWeather);
