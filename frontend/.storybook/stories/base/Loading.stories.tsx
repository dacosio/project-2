import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import Loading from "../../../src/components/base/Loading";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Loading> = {
  title: "Base/Loading",
  component: Loading,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
