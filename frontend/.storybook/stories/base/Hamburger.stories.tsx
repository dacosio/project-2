import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import Hamburger from "../../../src/components/base/Hamburger";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Hamburger> = {
  title: "Base/Hamburger",
  component: Hamburger,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
