import React, { useEffect, useState } from "react";

import DashboardView from "./Dashboard.view";
import { useGetPlantedCropsQuery } from "features/crops/cropApiSlice";
import Typography from "components/base/Typography";
import axios from "axios";
import { useCurrentCity } from "utils/hooks/useCurrentCity";
import Button from "components/base/Button";
import { useNavigate } from "react-router-dom";
import {
  storeSelectedCropId,
  storeSelectedOption,
} from "./../../features/crops/cropSlice";
import { useAppDispatch } from "./../../app/hooks";

const Dashboard = (): JSX.Element => {
  const { data, isLoading } = useGetPlantedCropsQuery({ isPlanted: true }); //or isFavorite??

  const generatedProps = {
    crops: data,
    isLoading,
    // generated props here
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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

  const handleSetState = (state: string) => {
    console.log("state " + state);
    setState(state);
  };

  const handleOpenCard = (id: string) => {
    navigate("/your-crops");
    dispatch(
      storeSelectedOption({
        value: "planted",
        label: "Planted",
      })
    );
    dispatch(storeSelectedCropId(id));
  };

  return (
    <>
      {selectedAddress &&
      weatherData &&
      weatherData.days &&
      weatherData.days.length > 0 ? (
        <DashboardView
          crops={data}
          isLoading={isLoading}
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
          onSelectedSearchLocationWeather={handleSelectedSearchLocation}
          MOCK_OPTIONS={MOCK_OPTIONS}
          state={state}
          onSetState={handleSetState}
          weatherData={weatherData}
          onSelectedWeatherIndexWeather={handleSelectedWeatherIndex}
          selectedIndex={selectedIndex}
          handleOpenCard={handleOpenCard}
        />
      ) : (
        <Button loading variant="disabled" />
      )}
    </>
  );
};

export default Dashboard;
