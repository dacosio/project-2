import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import PlantResult from "../../../src/components/base/PlantResult";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof PlantResult> = {
  title: "Base/PlantResult",
  component: PlantResult,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
