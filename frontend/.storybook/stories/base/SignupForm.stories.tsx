import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import SignupForm from "../../../src/components/base/SignupForm";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof SignupForm> = {
  title: "Base/SignupForm",
  component: SignupForm,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
