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
import Loading from "components/base/Loading";

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
    collapseState,
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
    <Container collapseState={collapseState}>
      {/* {collapseState ? "true" : "false"} */}
      {currentLocation &&
      weatherData &&
      weatherData.days &&
      weatherData.days.length > 0 ? (
        <>
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
            collapseState={collapseState}
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

          <BottomContainer collapseState={collapseState}>
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
              collapseState={collapseState}
            ></Wind>

            <Precipitation
              precip={
                state === MOCK_OPTIONS[0]
                  ? weatherData.days[0].hours[selectedIndex].precip
                  : weatherData.days[selectedIndex].precip
              }
              nextExpectedRainfall="monday"
              collapseState={collapseState}
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
              collapseState={collapseState}
            ></Humidity>

            {weatherData.alerts.length > 0 ? (
              <WeatherAlert
                alert={weatherData.alerts[0].headline}
                collapseState={collapseState}
              ></WeatherAlert>
            ) : (
              <WeatherTip
                condition={
                  state === MOCK_OPTIONS[0]
                    ? weatherData.days[0].hours[selectedIndex].conditions
                    : weatherData.days[selectedIndex].conditions
                }
                collapseState={collapseState}
              ></WeatherTip>
            )}
          </BottomContainer>
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default WeatherView;
