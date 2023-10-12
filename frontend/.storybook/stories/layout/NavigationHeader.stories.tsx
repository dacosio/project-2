import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import NavigationHeader from "../../../src/components/layout/NavigationHeader";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof NavigationHeader> = {
  title: "Layout/NavigationHeader",
  component: NavigationHeader,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
