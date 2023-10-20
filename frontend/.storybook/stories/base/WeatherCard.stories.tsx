import React, { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import WeatherCard from "../../../src/components/base/WeatherCard";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import axios from "axios";
import Typography from "../../../src/components/base/Typography";

const meta: Meta<typeof WeatherCard> = {
  title: "Base/WeatherCard",
  component: () => {
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
        {weatherData && weatherData.days && weatherData.days.length > 0 ? (
          <WeatherCard weatherData={weatherData} />
        ) : (
          <Typography>Loading weather data.</Typography>
        )}
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
