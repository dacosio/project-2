import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import PhotoUpload from "../../../src/components/base/PhotoUpload";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof PhotoUpload> = {
  title: "Base/PhotoUpload",
  component: PhotoUpload,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
