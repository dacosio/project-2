import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import Signin from "../../../src/components/base/Signin";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Signin> = {
  title: "Base/Signin",
  component: Signin,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
