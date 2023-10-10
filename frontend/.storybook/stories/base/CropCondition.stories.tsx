import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Container> = {
  title: "Base/Container",
  component: Container
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = () => <Container children={undefined} />;
