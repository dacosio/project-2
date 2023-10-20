import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import Signup from "../../../src/components/base/Signup";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Signup> = {
  title: "Base/Signup",
  component: () => {
    return (
      <Signup />
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
