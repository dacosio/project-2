import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Wind from "../../../src/components/base/Wind";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Wind> = {
  title: "Base/Wind",
  component: () => {
    return (
      <Container>
        <Wind windSpeed={7} gustSpeed={16} windDirection={0}></Wind>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
