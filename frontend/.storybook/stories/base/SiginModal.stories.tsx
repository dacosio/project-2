import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import SiginModal from "../../../src/components/base/SiginModal";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof SiginModal> = {
  title: "Base/SiginModal",
  component: SiginModal,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
