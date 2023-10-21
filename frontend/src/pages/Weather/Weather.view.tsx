import React, { useEffect, useState } from "react";
import { WeatherGeneratedProps } from "./Weather.props";
import { Container } from "./Weather.style";
import Chips from "components/base/Chips";
import CurrentWeather from "components/module/CurrentWeather";
import Typography from "components/base/Typography";
import axios from "axios";
import { useCurrentCity } from "utils/hooks/useCurrentCity";

const WeatherView = (props: WeatherGeneratedProps) => {
  const [weatherData, setWeatherData] = useState<{ [key: string]: any }>({});
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
  const { currentCity, errorMessage } = useCurrentCity();
  console.log(`currentCity : ${currentCity}`);
  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${currentCity}?unitGroup=metric&key=${process.env.REACT_APP_WEATHER_API_KEY}&contentType=json`;
  // console.log(`apiUrl : ${apiUrl}`);
  useEffect(() => {
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
  }, []);
  console.log(weatherData);

  if (
    currentCity &&
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
        "Partially cloudy".toLowerCase() ||
      weatherData.currentConditions.conditions.toLowerCase() ===
        "rain, partially cloudy".toLowerCase()
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
      "Rain".toLowerCase()
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
  return (
    <Container>
      {currentCity &&
      weatherData &&
      weatherData.days &&
      weatherData.days.length > 0 ? (
        <CurrentWeather
          currentLocation={currentCity}
          forecast={weatherData.currentConditions.conditions}
          currentTemperature={weatherData.currentConditions.temp}
          lowTemparature={weatherData.days[0]?.tempmin}
          highTemparature={weatherData.days[0]?.tempmax}
          gradientColor1={gradientColor1}
          gradientColor2={gradientColor2}
          currentCondition={currentCondition}
        />
      ) : (
        <Typography>Loading weather data.</Typography>
      )}
    </Container>
  );
};

export default WeatherView;
