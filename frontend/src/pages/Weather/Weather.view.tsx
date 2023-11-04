import React, { useEffect, useState } from "react";
import { WeatherGeneratedProps } from "./Weather.props";
import {
  BottomContainer,
  Container,
  HumidityContainer,
  PrecipitationContainer,
  WeatherAlertContainer,
  WindContainer,
} from "./Weather.style";
import Chips from "components/base/Chips";
import CurrentWeather from "components/module/CurrentWeather";
import Typography from "components/base/Typography";
import axios from "axios";
import { useCurrentCity } from "utils/hooks/useCurrentCity";
import HourlyDaily from "components/module/HourlyDaily";
import SegmentedControl from "components/base/SegmentedControl";
import Wind from "components/base/Wind";
import Precipitation from "components/base/Precipitation";
import Humidity from "../../components/base/Humidity";
import WeatherAlert from "components/base/WeatherAlert";
import { Col, Row } from "react-grid-system";
import WeatherTip from "components/base/WeatherTip";

const WeatherView = (props: WeatherGeneratedProps) => {
  const {
    currentLocation,
    forecast,
    currentTemperature,
    lowTemperature,
    highTemperature,
    precipitation = 0,
    humidity = 0,
    wind = 0,
    gradientColor1,
    gradientColor2,
    currentCondition,
    page,
    onSelectedSearchLocationWeather,
    MOCK_OPTIONS,
    state,
    onSetState,
    weatherData,
    onSelectedWeatherIndexWeather,
    selectedIndex,
    ...weatherGeneratedProps
  } = props;

  const handleSelectedSearchLocation = (address: string) => {
    console.log("Weather address " + address);
    onSelectedSearchLocationWeather(address);
  };

  const handleSelectedWeatherIndex = (value: number) => {
    console.log("Weather " + value);
    onSelectedWeatherIndexWeather(value);
  };

  return (
    <Container>
      <CurrentWeather
        currentLocation={currentLocation}
        forecast={forecast}
        currentTemperature={currentTemperature}
        lowTemperature={lowTemperature}
        highTemperature={highTemperature}
        precipitation={precipitation}
        humidity={humidity}
        wind={wind}
        gradientColor1={gradientColor1}
        gradientColor2={gradientColor2}
        currentCondition={currentCondition}
        page="weather"
        onSelectedSearchLocation={handleSelectedSearchLocation}
      />
      <SegmentedControl
        options={MOCK_OPTIONS}
        selectedOption={state}
        onClickControl={(value: string) => {
          console.log(value);
          onSetState(value);
        }}
      />
      <HourlyDaily
        weatherDataArray={
          state === MOCK_OPTIONS[0] ? weatherData.days[0] : weatherData
        }
        state={state}
        onSelectedWeatherIndex={handleSelectedWeatherIndex}
        index={selectedIndex}
      ></HourlyDaily>

      <BottomContainer>
        <Wind
          windSpeed={
            state === MOCK_OPTIONS[0]
              ? weatherData.days[0].hours[selectedIndex].windspeed
              : weatherData.days[selectedIndex].windspeed
          }
          gustSpeed={
            state === MOCK_OPTIONS[0]
              ? weatherData.days[0].hours[selectedIndex].windgust
              : weatherData.days[selectedIndex].windgust
          }
          windDirection={
            state === MOCK_OPTIONS[0]
              ? weatherData.days[0].hours[selectedIndex].winddir
              : weatherData.days[selectedIndex].winddir
          }
        ></Wind>

        <Precipitation
          precip={
            state === MOCK_OPTIONS[0]
              ? weatherData.days[0].hours[selectedIndex].precip
              : weatherData.days[selectedIndex].precip
          }
          nextExpectedRainfall="monday"
        ></Precipitation>

        <Humidity
          humidity={
            state === MOCK_OPTIONS[0]
              ? weatherData.days[0].hours[selectedIndex].humidity
              : weatherData.days[selectedIndex].humidity
          }
          dew={
            state === MOCK_OPTIONS[0]
              ? weatherData.days[0].hours[selectedIndex].dew
              : weatherData.days[selectedIndex].dew
          }
        ></Humidity>

        {weatherData.alerts.length > 0 ? (
          <WeatherAlert alert={weatherData.alerts[0].headline}></WeatherAlert>
        ) : (
          <WeatherTip
            condition={
              state === MOCK_OPTIONS[0]
                ? weatherData.days[0].hours[selectedIndex].conditions
                : weatherData.days[selectedIndex].conditions
            }
          ></WeatherTip>
        )}
      </BottomContainer>
    </Container>
  );
};

export default WeatherView;
