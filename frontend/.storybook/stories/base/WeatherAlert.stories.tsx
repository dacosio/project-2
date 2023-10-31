import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import WeatherAlert from "../../../src/components/base/WeatherAlert";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof WeatherAlert> = {
  title: "Base/WeatherAlert",
  component: () => {
    return (
      <Container>
        <WeatherAlert alert="National Weather Service: SEVERE STORM WARNING in effect in this area until 6:30 PM CST for destructive 80mph winds. "></WeatherAlert>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
