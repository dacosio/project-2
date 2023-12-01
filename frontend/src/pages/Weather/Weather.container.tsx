import React, { useEffect, useState } from "react";

import WeatherView from "./Weather.view";
import axios from "axios";
import { useCurrentCity } from "utils/hooks/useCurrentCity";
import Typography from "components/base/Typography";
import Button from "components/base/Button";
import Loading from "components/base/Loading";
import { useAppSelector } from "app/hooks";
import { selectCollapse } from "features/sidebar/sidebarSlice";

const Weather = (): JSX.Element => {
  const [weatherData, setWeatherData] = useState<{ [key: string]: any }>({});
  const MOCK_OPTIONS = ["Today", "15-day"];
  const [state, setState] = useState(MOCK_OPTIONS[0]);
  const [selectedAddress, setSelectedAddress] = useState(
    useCurrentCity().currentCity
  );
  let gradientColor1 = "";
  let gradientColor2 = "";
  let currentCondition = "";

  /**
   * Intialising the current weather component's background color gradient values for different weather conditions
   */
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

  const getCurrentHour24Format = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      hour12: false,
    };
    const hour24 = new Intl.DateTimeFormat("en-GB", options).format(now);
    return hour24; // This will return the hour part only, like "03" or "15"
  };

  const getIndex = (datetime: string) => {
    if (state === MOCK_OPTIONS[0]) {
      const currentTimeIndex = parseInt(getCurrentHour24Format());
      return currentTimeIndex;
    } else {
      return 1;
    }
  };
  const [selectedIndex, setSelectedIndex] = useState(getIndex("2023-11-22"));

  console.log(`currentCity : ${selectedAddress}`);
  useEffect(() => {
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedAddress}?unitGroup=metric&key=${process.env.REACT_APP_WEATHER_API_KEY}&contentType=json`;

    // get data from weather API and use the data on setWeatherData
    const onFetchWeather = () =>
      axios
        .get(apiUrl)
        .then((response) => {
          // Set the response data in the component's state
          setWeatherData(response.data);
        })
        .catch((error) => {
          // Handle any errors and set the error in the component's state
          setWeatherData({});
          console.log(error);
        });

    onFetchWeather();
  }, [selectedAddress]);

  /**
   * Checking if weather data has been fetched .If true , we compare the weather condition to finalise the gradient values
   */
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
      weatherData.currentConditions.conditions
        .toLowerCase()
        .includes("clear".toLowerCase())
    ) {
      gradientColor1 = gradientObject.clear[0];
      gradientColor2 = gradientObject.clear[1];
      currentCondition = "clear";
    } else if (
      weatherData.currentConditions.conditions
        .toLowerCase()
        .includes("Snow".toLowerCase())
    ) {
      gradientColor1 = gradientObject.snow[0];
      gradientColor2 = gradientObject.snow[1];
      currentCondition = "snow";
    } else if (
      weatherData.currentConditions.conditions
        .toLowerCase()
        .includes("Rain".toLowerCase()) ||
      weatherData.currentConditions.conditions.toLowerCase() ===
        "rain, partially cloudy".toLowerCase() ||
      weatherData.currentConditions.conditions.toLowerCase() ===
        "Rain, Overcast".toLowerCase()
    ) {
      gradientColor1 = gradientObject.rain[0];
      gradientColor2 = gradientObject.rain[1];
      currentCondition = "rain";
    } else if (
      weatherData.currentConditions.conditions
        .toLowerCase()
        .includes("Partially cloudy".toLowerCase())
    ) {
      gradientColor1 = gradientObject.partiallyCloudy[0];
      gradientColor2 = gradientObject.partiallyCloudy[1];
      currentCondition = "partiallyCloudy";
    } else if (
      weatherData.currentConditions.conditions
        .toLowerCase()
        .includes("Overcast".toLowerCase())
    ) {
      gradientColor1 = gradientObject.overcast[0];
      gradientColor2 = gradientObject.overcast[1];
      currentCondition = "overcast";
    } else if (
      weatherData.currentConditions.conditions
        .toLowerCase()
        .includes("Thunderstorm".toLowerCase())
    ) {
      gradientColor1 = gradientObject.thunderStorm[0];
      gradientColor2 = gradientObject.thunderStorm[1];
      currentCondition = "thunderStorm";
    } else if (
      weatherData.currentConditions.conditions
        .toLowerCase()
        .includes("Heavy Rain and Snow".toLowerCase())
    ) {
      gradientColor1 = gradientObject.snowRain[0];
      gradientColor2 = gradientObject.snowRain[1];
      currentCondition = "snowRain";
    } else if (
      weatherData.currentConditions.conditions
        .toLowerCase()
        .includes("Thunderstorm and rain".toLowerCase())
    ) {
      gradientColor1 = gradientObject.thunderStormRain[0];
      gradientColor2 = gradientObject.thunderStormRain[1];
      currentCondition = "thunderStormRain";
    }
  }

  /**
   * Sets the values of selected address from the location search input
   * @param address
   */
  const handleSelectedSearchLocation = (address: string) => {
    setSelectedAddress(address);
    setSelectedIndex(getIndex("2023-11-22"));
  };

  /**
   * Sets the current selected weather index of the hourly daily component
   * @param value
   */
  const handleSelectedWeatherIndex = (value: number) => {
    setSelectedIndex(value);
  };

  /**
   * Sets what state Hourly Component is now i.e either Today or 15 Days
   * @param state
   */
  const handleSetState = (state: string) => {
    setState(state);
  };

  const collapseState = useAppSelector(selectCollapse);

  const page = "weather";

  let generatedProps = {
    currentLocation: selectedAddress,
    forecast: "Test Forecast",
    currentTemperature: 0,
    lowTemperature: 0,
    highTemperature: 0,
    precipitation: 0,
    humidity: 0,
    wind: 0,
    gradientColor1: gradientColor1,
    gradientColor2: gradientColor2,
    currentCondition: currentCondition,
    page: page,
    onSelectedSearchLocationWeather: handleSelectedSearchLocation,
    MOCK_OPTIONS: MOCK_OPTIONS,
    state: state,
    onSetState: handleSetState,
    weatherData: weatherData,
    onSelectedWeatherIndexWeather: handleSelectedWeatherIndex,
    selectedIndex: selectedIndex,
    collapseState: collapseState,
  };

  /**
   * Checking if weather data has been fetched .If true , setting up the generated Props to be sent to Weather View.
   */
  if (
    selectedAddress &&
    weatherData &&
    weatherData.days &&
    weatherData.days.length > 0
  ) {
    generatedProps = {
      currentLocation: selectedAddress,
      forecast: weatherData.currentConditions.conditions,
      currentTemperature: weatherData.currentConditions.temp,
      lowTemperature: weatherData.days[0]?.tempmin,
      highTemperature: weatherData.days[0]?.tempmax,
      precipitation: weatherData.currentConditions.precip,
      humidity: weatherData.currentConditions.humidity,
      wind: weatherData.currentConditions.windspeed,
      gradientColor1: gradientColor1,
      gradientColor2: gradientColor2,
      currentCondition: currentCondition,
      page: page,
      onSelectedSearchLocationWeather: handleSelectedSearchLocation,
      MOCK_OPTIONS: MOCK_OPTIONS,
      state: state,
      onSetState: handleSetState,
      weatherData: weatherData,
      onSelectedWeatherIndexWeather: handleSelectedWeatherIndex,
      selectedIndex: selectedIndex,
      collapseState: collapseState,
    };
  }
  return <WeatherView {...generatedProps} />;
};

export default Weather;
