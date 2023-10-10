import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Chips from "../../../src/components/base/Chips";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const meta: Meta<typeof Chips> = {
  title: "Base/Chips",
  component: () => {
    return (
      <Container background="white">
        <Chips label="Button" variant="filled" />

        <Chips label="Button" variant="outlined" />
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
