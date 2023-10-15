import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import Tab from "../../../src/components/base/Tab";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Tab> = {
  title: "Base/Tab",
  component: Tab,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
