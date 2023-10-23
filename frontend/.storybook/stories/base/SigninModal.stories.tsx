import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import SigninModal from "../../../src/components/base/SigninModal";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof SigninModal> = {
  title: "Base/SigninModal",
  component: SigninModal,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
