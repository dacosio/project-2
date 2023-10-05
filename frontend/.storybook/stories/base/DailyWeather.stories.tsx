import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DailyWeather from "../../../src/components/base/DailyWeather";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof DailyWeather> = {
  title: "Base/DailyWeather",
  component: () => {
    return (
      <div
        style={{
          display: "flex",
          gap: "32px",
        }}
      >
        <DailyWeather day="Mon" weather="Cloudy" min={18} max={22} />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
