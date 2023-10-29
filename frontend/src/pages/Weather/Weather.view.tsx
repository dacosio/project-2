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

const WeatherView = (props: WeatherGeneratedProps) => {
  const [weatherData, setWeatherData] = useState<{ [key: string]: any }>({});
  const MOCK_OPTIONS = ["Today", "15-day"];
  const [state, setState] = useState(MOCK_OPTIONS[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState(
    useCurrentCity().currentCity
  );
  let gradientColor1 = "";
  let gradientColor2 = "";
  let currentCondition = "";

  const [gradientObject, setGradientObject] = useState({
    clear: ["#1DAEFF", "#8ECCEF"],
    partiallyCloudy: ["#6DDFFC", "#89B4E7"],
    overcast: ["#83D3EF", "#4A629B"],
    rain: ["#37528C", "#9BACD0"],
    thunderStorm: ["#7148D5", "#C9A6C7"],
    snow: ["#1DACF0", "#202C4C"],
    snowRain: ["#524E8B", "#2A3259"],
    thunderStormRain: ["#7148D5", "#C9A6C7"],
  });
  const date = new Date();
  // const { currentCity, errorMessage } = useCurrentCity();
  // if (currentCity) {
  //   setSelectedAddress(currentCity);
  //   console.log(`selectedAddress : ${selectedAddress}`);
  // }

  console.log(`currentCity : ${selectedAddress}`);
  // console.log(`apiUrl : ${apiUrl}`);
  useEffect(() => {
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedAddress}?unitGroup=metric&key=${process.env.REACT_APP_WEATHER_API_KEY}&contentType=json`;

    // get data from weather API and use the data on setWeatherData
    const onFetchWeather = () =>
      axios
        .get(apiUrl)
        .then((response) => {
          // Set the response data in the component's state
          setWeatherData(response.data);
          console.log(weatherData);
        })
        .catch((error) => {
          // Handle any errors and set the error in the component's state
          setWeatherData({});
          console.log(error);
        });

    onFetchWeather();
  }, [selectedAddress]);
  console.log(weatherData);

  if (
    selectedAddress &&
    weatherData &&
    weatherData.days &&
    weatherData.days.length > 0
  ) {
    console.log(
      `Current Condition : ${weatherData.currentConditions.conditions.toLowerCase()}`
    );
    if (
      weatherData.currentConditions.conditions.toLowerCase() ===
      "clear".toLowerCase()
    ) {
      gradientColor1 = gradientObject.clear[0];
      gradientColor2 = gradientObject.clear[1];
      currentCondition = "clear";
    } else if (
      weatherData.currentConditions.conditions.toLowerCase() ===
      "Partially cloudy".toLowerCase()
    ) {
      gradientColor1 = gradientObject.partiallyCloudy[0];
      gradientColor2 = gradientObject.partiallyCloudy[1];
      currentCondition = "partiallyCloudy";
    } else if (
      weatherData.currentConditions.conditions.toLowerCase() ===
      "Overcast".toLowerCase()
    ) {
      gradientColor1 = gradientObject.overcast[0];
      gradientColor2 = gradientObject.overcast[1];
      currentCondition = "overcast";
    } else if (
      weatherData.currentConditions.conditions.toLowerCase() ===
        "Rain".toLowerCase() ||
      weatherData.currentConditions.conditions.toLowerCase() ===
        "rain, partially cloudy".toLowerCase() ||
      weatherData.currentConditions.conditions.toLowerCase() ===
        "Rain, Overcast".toLowerCase()
    ) {
      gradientColor1 = gradientObject.rain[0];
      gradientColor2 = gradientObject.rain[1];
      currentCondition = "rain";
    } else if (
      weatherData.currentConditions.conditions.toLowerCase() ===
      "Thunderstorm".toLowerCase()
    ) {
      gradientColor1 = gradientObject.thunderStorm[0];
      gradientColor2 = gradientObject.thunderStorm[1];
      currentCondition = "thunderStorm";
    } else if (
      weatherData.currentConditions.conditions.toLowerCase() ===
      "Snow".toLowerCase()
    ) {
      gradientColor1 = gradientObject.snow[0];
      gradientColor2 = gradientObject.snow[1];
      currentCondition = "snow";
    } else if (
      weatherData.currentConditions.conditions.toLowerCase() ===
      "Heavy Rain and Snow".toLowerCase()
    ) {
      gradientColor1 = gradientObject.snowRain[0];
      gradientColor2 = gradientObject.snowRain[1];
      currentCondition = "snowRain";
    } else if (
      weatherData.currentConditions.conditions.toLowerCase() ===
      "Thunderstorm and rain".toLowerCase()
    ) {
      gradientColor1 = gradientObject.thunderStormRain[0];
      gradientColor2 = gradientObject.thunderStormRain[1];
      currentCondition = "thunderStormRain";
    }

    console.log(`gradientColor1 : ${gradientColor1}`);
    console.log(`gradientColor2 : ${gradientColor2}`);
    console.log(`currentCondition : ${currentCondition}`);
  }

  const handleSelectedSearchLocation = (address: string) => {
    console.log("Weather address " + address);
    setSelectedAddress(address);
  };

  const handleSelectedWeatherIndex = (value: number) => {
    console.log("Weather " + value);
    setSelectedIndex(value);
  };

  return (
    <Container>
      {selectedAddress &&
      weatherData &&
      weatherData.days &&
      weatherData.days.length > 0 ? (
        <>
          <CurrentWeather
            currentLocation={selectedAddress}
            forecast={weatherData.currentConditions.conditions}
            currentTemperature={weatherData.currentConditions.temp}
            lowTemperature={weatherData.days[0]?.tempmin}
            highTemperature={weatherData.days[0]?.tempmax}
            precipitation={weatherData.currentConditions.precip}
            humidity={weatherData.currentConditions.humidity}
            wind={weatherData.currentConditions.windspeed}
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
              setState(value);
              console.log(state);
            }}
          />
          <HourlyDaily
            weatherDataArray={
              state === MOCK_OPTIONS[0] ? weatherData.days[0] : weatherData
            }
            state={state}
            onSelectedWeatherIndex={handleSelectedWeatherIndex}
          ></HourlyDaily>

          <Row>
            <Col md={6} lg={3} style={{ gap: "20px" }}>
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
            </Col>
            <Col md={6} lg={3} style={{ gap: "20px" }}>
              <Precipitation
                precip={
                  state === MOCK_OPTIONS[0]
                    ? weatherData.days[0].hours[selectedIndex].precip
                    : weatherData.days[selectedIndex].precip
                }
                nextExpectedRainfall="monday"
              ></Precipitation>
            </Col>
            <Col md={6} lg={3} style={{ gap: "20px" }}>
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
            </Col>
            <Col md={6} lg={3} style={{ gap: "20px" }}>
              <WeatherAlert alert="National Weather Service: SEVERE STORM WARNING in effect in this area until 6:30 PM CST for destructive 80mph winds. "></WeatherAlert>
            </Col>
          </Row>
        </>
      ) : (
        <Typography>Loading weather data.</Typography>
      )}
    </Container>
  );
};

export default WeatherView;
