import React, { useEffect, useState } from "react";
import { WeatherGeneratedProps } from "./Weather.props";
import { Container } from "./Weather.style";
import axios from "axios";

const WeatherView = (props: WeatherGeneratedProps) => {
  const [weatherData, setWeatherData] = useState<{ [key: string]: any }>({});
  const [error, setError] = useState(null);
  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/vancouver?unitGroup=metric&key=${process.env.REACT_APP_WEATHER_API_KEY}&contentType=json`;

  useEffect(() => {
    // get data from weather API and use the data on setWeatherData
    const onFetchWeather = () =>
      axios
        .get(apiUrl)
        .then((response) => {
          console.log(response);
          // Set the response data in the component's state
          setWeatherData(response.data);
          setError(null);
        })
        .catch((error) => {
          // Handle any errors and set the error in the component's state
          setWeatherData({});
          setError(error);
          console.log(error);
        });

    onFetchWeather();
  }, []);

  return (
    <Container>
      {" "}
      <div>
        {/* <button onClick={onFetchWeather}>Get Weather</button> */}
        <div>Weather: {weatherData.address}</div>
      </div>{" "}
    </Container>
  );
};

export default WeatherView;
