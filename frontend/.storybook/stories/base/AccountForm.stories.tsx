import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import AccountForm from "../../../src/components/base/AccountForm";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof AccountForm> = {
  title: "Base/AccountForm",
  component: AccountForm,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
