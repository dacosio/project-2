import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import WeatherCard from "../../../src/components/base/WeatherCard";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof WeatherCard> = {
  title: "Base/WeatherCard",
  component: () =>
    <Container>
      <WeatherCard />
    </Container>
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
