import React, { useState, useEffect } from "react";
import { WeatherCardProps } from "./WeatherCard.props";
import {
  Container,
  LocationContainer,
  TemperatureContainer,
  ForecastContainer,
  CloudContainer,
} from "./WeatherCard.style";
import Typography from "../Typography";
import CurrentDate from "../CurrentDate/CurrentDate.view";
import Rainy from "../SVG/Rainy";
import axios from "axios";

const WeatherCard = (props: WeatherCardProps): JSX.Element => {
  const { weatherData, ...weatherCardProps } = props;
  return (
    <Container>
      {weatherData && weatherData.days && weatherData.days.length > 0 ? (
        <div className="weather-content">
          <div className="right-side-content">
            <LocationContainer>
              <Typography variant="subtitle" weight="700">
                {weatherData.address}
              </Typography>
              <Typography variant="body">
                <CurrentDate />
              </Typography>
            </LocationContainer>
            <TemperatureContainer>
              <Typography variant="title3" weight="700">
                {weatherData.currentConditions?.conditions}
              </Typography>
              <Typography variant="title1" weight="900">
                {weatherData.currentConditions?.temp}°C
              </Typography>
              <Typography variant="body">
                High <span> {weatherData.days[0]?.tempmax}°C</span> Low{" "}
                <span>{weatherData.days[0]?.tempmin}°C</span>
              </Typography>
            </TemperatureContainer>
          </div>

          <div className="left-side-content">
            <CloudContainer>
              {/* <ImageContainer src={Clouds} alt='clouds' /> */}
              <Rainy />
            </CloudContainer>
            <ForecastContainer>
              <Typography variant="body" align="left">
                Precipitation{" "}
                <span>{weatherData.currentConditions?.precip}%</span>
              </Typography>
              <Typography variant="body" align="left">
                Humidity <span>{weatherData.currentConditions?.humidity}%</span>
              </Typography>
              <Typography variant="body" align="left">
                Wind <span>{weatherData.currentConditions?.windspeed}km/h</span>
              </Typography>
            </ForecastContainer>
          </div>
        </div>
      ) : (
        <Typography>Loading weather data.</Typography>
      )}
    </Container>
  );
};

export default React.memo(WeatherCard);
