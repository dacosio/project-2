import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import ContactSection from "../../../src/components/layout/ContactSection";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof ContactSection> = {
  title: "Layout/ContactSection",
  component: ContactSection,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
