import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "../../../src/components/base/Checkbox";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Checkbox> = {
  title: "Base/Checkbox",
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
