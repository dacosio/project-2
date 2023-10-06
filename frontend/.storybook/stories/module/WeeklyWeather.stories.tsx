import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import WeeklyWeather from "../../../src/components/module/WeeklyWeather";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { DailyWeather } from "../../../src/components/module/WeeklyWeather/WeeklyWeather.props";

const meta: Meta<typeof WeeklyWeather> = {
  title: "Module/WeeklyWeather",
  component: () => {
    const dailyWeathers: DailyWeather[] = [
      { humidity: 71, weather: "Cloudy", max: 22, min: 18 },
      { humidity: 69, weather: "Sunny", max: 23, min: 20 },
      { humidity: 85, weather: "Rainy", max: 20, min: 17 },
      { humidity: 88, weather: "Rainy", max: 19, min: 18 },
      { humidity: 89, weather: "Rainy", max: 20, min: 17 },
      { humidity: 81, weather: "Cloudy", max: 21, min: 18 },
      { humidity: 95, weather: "Rainy", max: 19, min: 16 },
      { humidity: 82, weather: "Cloudy", max: 18, min: 16 },
    ];

    return <WeeklyWeather dailyWeathers={dailyWeathers} dayOffset={0} />;
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
