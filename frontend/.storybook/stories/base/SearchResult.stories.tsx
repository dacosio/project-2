import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import SearchResult from "../../../src/components/base/SearchResult";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof SearchResult> = {
  title: "Base/SearchResult",
  component: SearchResult,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
