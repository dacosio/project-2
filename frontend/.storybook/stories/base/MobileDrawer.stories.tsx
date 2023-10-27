import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import MobileDrawer from "../../../src/components/base/MobileDrawer";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof MobileDrawer> = {
  title: "Base/MobileDrawer",
  component: MobileDrawer,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
