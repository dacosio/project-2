import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import LocationSearch from "../../../src/components/module/LocationSearch";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof LocationSearch> = {
  title: "Module/LocationSearch",
  component: LocationSearch,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
