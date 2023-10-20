import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import SignupModal from "../../../src/components/base/SignupModal";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof SignupModal> = {
  title: "Base/SignupModal",
  component: SignupModal,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
