import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CurrentWeather from "../../../src/components/module/CurrentWeather";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof CurrentWeather> = {
  title: "Module/CurrentWeather",
  component: () => {
    return (
      <Container>
        <CurrentWeather />
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
