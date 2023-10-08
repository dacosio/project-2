import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import CurrentDate from "../../../src/components/base/CurrentDate";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof CurrentDate> = {
  title: "Base/CurrentDate",
  component: CurrentDate,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
