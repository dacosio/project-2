import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Chips from "../../../src/components/base/Chips";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Chips> = {
  title: "Base/Chips",
  component: () => {
    return (
      <Container background="white">
        <Chips label="Button" variant="filled" />

        <Chips label="Button" variant="filled" active={true} />

        <Chips label="Button" variant="outlined" />

        <Chips label="Button" variant="outlined" active={true} />
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
