import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import Card from "../../../src/components/layout/Card";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Card> = {
  title: "Layout/Card",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
