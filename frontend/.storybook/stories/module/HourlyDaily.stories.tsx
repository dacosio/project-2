import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import HourlyDaily from "../../../src/components/module/HourlyDaily";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof HourlyDaily> = {
  title: "Module/HourlyDaily",
  component: () => {
    const MOCK_OPTIONS = ["Today", "15-day"];
    let weatherDataHourly = {
      datetime: "2023-10-23",
      temp: 9.1,
      description: "Partly cloudy throughout the day.",
      conditions: "Partially cloudy",
      hours: [
        {
          datetime: "00:00:00",
          temp: 8.4,
          description: "Partly cloudy throughout the day.",
          conditions: "Partially cloudy",
        },
        {
          datetime: "01:00:00",
          temp: 8.4,
          description: "Partly cloudy throughout the day.",
          conditions: "Partially cloudy",
        },
        {
          datetime: "02:00:00",
          temp: 8.4,
          description: "Partly cloudy throughout the day.",
          conditions: "Partially cloudy",
        },
        {
          datetime: "03:00:00",
          temp: 8.4,
          description: "Partly cloudy throughout the day.",
          conditions: "Partially cloudy",
        },
      ],
    };

    let weatherDataDaily = {
      datetime: "2023-10-23",
      temp: 9.1,
      description: "Partly cloudy throughout the day.",
      conditions: "Partially cloudy",
      days: [
        {
          datetime: "2023-10-23",
          temp: 8.4,
          description: "Partly cloudy throughout the day.",
          conditions: "Partially cloudy",
        },
        {
          datetime: "2023-10-24",
          temp: 8.4,
          description: "Partly cloudy throughout the day.",
          conditions: "Partially cloudy",
        },
        {
          datetime: "2023-10-25",
          temp: 8.4,
          description: "Partly cloudy throughout the day.",
          conditions: "Partially cloudy",
        },
        {
          datetime: "2023-10-26",
          temp: 8.4,
          description: "Partly cloudy throughout the day.",
          conditions: "Partially cloudy",
        },
      ],
    };

    const handleSelectedWeatherIndex = (value: number) => {
      console.log("Weather " + value);
    };
    return (
      <Container>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
          <HourlyDaily
            weatherDataArray={weatherDataHourly}
            state={MOCK_OPTIONS[0]}
            onSelectedWeatherIndex={handleSelectedWeatherIndex}
          ></HourlyDaily>

          <HourlyDaily
            weatherDataArray={weatherDataDaily}
            state={MOCK_OPTIONS[1]}
            onSelectedWeatherIndex={handleSelectedWeatherIndex}
          ></HourlyDaily>
        </div>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
