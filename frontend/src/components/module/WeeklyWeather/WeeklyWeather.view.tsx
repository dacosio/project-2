import React, { useEffect, useRef, useState } from "react";
import { WeeklyWeatherProps } from "./WeeklyWeather.props";
import {
  DailyWeatherListContainer,
  Container,
  GraphListContainer,
  HumidityContainer,
  HumidityListContainer,
} from "./WeeklyWeather.style";
import Graph from "../../base/Graph";
import DailyWeather from "../../base/DailyWeather";
import Typography from "../../base/Typography";

interface Point {
  start: number;
  end: number;
}

const WeeklyWeather = (props: WeeklyWeatherProps): JSX.Element => {
  const { dailyWeathers, dayOffset } = props;

  const days = ["Sun", "Mon", "Tues", "Wed", "Th", "Fri", "Sat"];

  const humidities = [
    50,
    ...dailyWeathers.map((dailyWeather) => dailyWeather.humidity),
    50,
  ];

  const points: Point[] = [];
  for (let i = 0; i < humidities.length - 1; i++) {
    points.push({ start: humidities[i], end: humidities[i + 1] });
  }

  return (
    <Container>
      <HumidityListContainer>
        {points.slice(1).map((point, index) => (
          <HumidityContainer key={index}>
            <Typography align="center">{point.start}%</Typography>
          </HumidityContainer>
        ))}
      </HumidityListContainer>
      <GraphListContainer>
        {points.map((point, index) => (
          <Graph
            width={122}
            height={100}
            start={point.start}
            end={point.end}
            key={index}
          />
        ))}
      </GraphListContainer>
      <DailyWeatherListContainer>
        {dailyWeathers.map((dailyWeather, index) => (
          <DailyWeather
            day={days[(dayOffset + index) % 7]}
            max={dailyWeather.max}
            min={dailyWeather.min}
            weather={dailyWeather.weather}
            key={index}
          />
        ))}
      </DailyWeatherListContainer>
    </Container>
  );
};

export default React.memo(WeeklyWeather);
