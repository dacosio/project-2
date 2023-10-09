import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import HomeNavigation from "../../../src/components/layout/HomeNavigation";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof HomeNavigation> = {
  title: "Layout/HomeNavigation",
  component: HomeNavigation,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
