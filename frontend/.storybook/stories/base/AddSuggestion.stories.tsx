import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import AddSuggestion from "../../../src/components/base/AddSuggestion";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof AddSuggestion> = {
  title: "Base/AddSuggestion",
  component: AddSuggestion,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
