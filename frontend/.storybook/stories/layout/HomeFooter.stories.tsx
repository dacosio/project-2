import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import HomeFooter from "../../../src/components/layout/HomeFooter";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof HomeFooter> = {
  title: "Layout/HomeFooter",
  component: HomeFooter,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
