import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import CropAbout from "../../../src/components/module/CropAbout";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof CropAbout> = {
  title: "Module/CropAbout",
  component: CropAbout,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
