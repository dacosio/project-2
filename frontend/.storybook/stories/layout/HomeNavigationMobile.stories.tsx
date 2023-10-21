import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import HomeNavigationMobile from "../../../src/components/layout/HomeNavigationMobile";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof HomeNavigationMobile> = {
  title: "Layout/HomeNavigationMobile",
  component: HomeNavigationMobile,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
