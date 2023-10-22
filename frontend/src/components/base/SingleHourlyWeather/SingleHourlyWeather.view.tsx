import React from "react";
import { SingleHourlyWeatherProps } from "./SingleHourlyWeather.props";
import {
  Container,
  TemperatureContainer,
  WeatherContainer,
} from "./SingleHourlyWeather.style";
import Typography from "../Typography";
import { Cloudy, Rainy, Sunny } from "../SVG";

const SingleHourlyWeather = (props: SingleHourlyWeatherProps): JSX.Element => {
  const { time, dayName, dayDate, condition, temperature, hourlyFlag } = props;
  return (
    <Container>
      <Typography variant="body" align="center" textColor="white">
        {time}
      </Typography>
      <WeatherContainer>
        {condition === "overcast" ? (
          <Cloudy width={50} height={50} />
        ) : condition === "rain" ? (
          <Rainy width={50} height={50} />
        ) : (
          <Sunny width={50} height={50} />
        )}
      </WeatherContainer>
      <TemperatureContainer>
        <Typography variant="body" align="center" textColor="white">
          {temperature}°
        </Typography>
      </TemperatureContainer>
    </Container>
  );
};

export default React.memo(SingleHourlyWeather);
