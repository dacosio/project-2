import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import MobileNavBackground from "../../../src/components/base/MobileNavBackground";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof MobileNavBackground> = {
  title: "Base/MobileNavBackground",
  component: MobileNavBackground,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
