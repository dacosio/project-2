import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import Search from "../../../src/components/base/Search";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Search> = {
  title: "Base/Search",
  component: Search,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
