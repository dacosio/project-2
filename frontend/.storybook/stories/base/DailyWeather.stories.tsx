import React, { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DailyWeather from "../../../src/components/base/DailyWeather";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof DailyWeather> = {
  title: "Base/DailyWeather",
  component: () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    useEffect(() => {
      console.log(`isChecked :: ${isChecked}`);
    }, [isChecked]);

    return (
      <div
        style={{
          display: "flex",
          gap: "32px",
          gridTemplateColumns: "repeat(8, 1fr)",
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
