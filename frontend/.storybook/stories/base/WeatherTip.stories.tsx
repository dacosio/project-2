import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import WeatherTip from "../../../src/components/base/WeatherTip";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof WeatherTip> = {
  title: "Base/WeatherTip",
  component: () => {
    return (
      <Container>
        <WeatherTip></WeatherTip>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
