import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Humidity from "../../../src/components/base/Humidity";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Humidity> = {
  title: "Base/Humidity",
  component: () => {
    return (
      <Container>
        <Humidity humidity={65} dew={16}></Humidity>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
