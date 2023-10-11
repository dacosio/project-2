import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import Container from "../../components/Container";
import CropCondition from './../../../src/components/base/CropCondition'
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof CropCondition> = {
  title: "Base/CropCondition",
  component: () => {
    return (
      <Container style={{ width: '265px', display: 'block' }}>
        <CropCondition title='Temperature' output='12°C - 15°C' />
      </Container>
    )
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
