import React, { useEffect, useState } from "react";
import { DashboardGeneratedProps } from "./Dashboard.props";
import { Container } from "./Dashboard.style";
import WeatherCard from "../../components/base/WeatherCard";
import axios from "axios";
import Typography from "components/base/Typography";

const DashboardView = (props: DashboardGeneratedProps) => {
  const [weatherData, setWeatherData] = useState<{ [key: string]: any }>({});

  const date = new Date();
  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/vancouver?unitGroup=metric&key=${process.env.REACT_APP_WEATHER_API_KEY}&contentType=json`;

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

  return (
    <Container>
      Dashboard
      {weatherData && weatherData.days && weatherData.days.length > 0 ? (
        <WeatherCard weatherData={weatherData} />
      ) : (
        <Typography>Loading weather data.</Typography>
      )}
    </Container>
  );
};

export default DashboardView;
