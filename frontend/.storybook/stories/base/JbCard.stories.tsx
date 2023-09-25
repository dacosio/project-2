import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import JbCard from "../../../src/components/base/JbCard";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof JbCard> = {
  title: "Base/JbCard",
  component: JbCard,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
