import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import LoginModal from "../../../src/components/base/LoginModal";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof LoginModal> = {
  title: "Base/LoginModal",
  component: LoginModal,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
