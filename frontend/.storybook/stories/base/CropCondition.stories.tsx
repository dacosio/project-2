import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import CropCondition from "../../../src/components/base/CropCondition";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof CropCondition> = {
  title: "Base/CropCondition",
  component: () =>
    <CropCondition title='Temperature' output='21-27°C' />
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = () => <CropCondition title='Temperature' output="25°C" />;
