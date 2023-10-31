import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Precipitation from "../../../src/components/base/Precipitation";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Precipitation> = {
  title: "Base/Precipitation",
  component: () => {
    return (
      <Container>
        <Precipitation precip={2} nextExpectedRainfall="monday"></Precipitation>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
