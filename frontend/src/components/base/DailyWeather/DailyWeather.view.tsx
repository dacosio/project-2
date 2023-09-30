import React from "react";
import { DailyWeatherProps } from "./DailyWeather.props";
import {
  Container,
  TemperatureContainer,
  WeatherContainer,
} from "./DailyWeather.style";
import Typography from "../Typography";
import { Cloudy } from "../../../../src/components/base/SVG";

const DailyWeather = (props: DailyWeatherProps): JSX.Element => {
  return (
    <Container>
      <Typography variant="title5" weight="700" align="center">
        Mon
      </Typography>
      <WeatherContainer>
        <Cloudy width={50} height={50} />
      </WeatherContainer>
      <TemperatureContainer>
        <Typography variant="body" align="center">
          22℃
        </Typography>
        <Typography variant="body" align="center">
          18℃
        </Typography>
      </TemperatureContainer>
    </Container>
  );
};

export default React.memo(DailyWeather);
