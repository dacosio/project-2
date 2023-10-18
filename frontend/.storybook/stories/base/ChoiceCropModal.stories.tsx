import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import ChoiceCropModal from "../../../src/components/base/ChoiceCropModal";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof ChoiceCropModal> = {
  title: "Base/ChoiceCropModal",
  component: ChoiceCropModal,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
