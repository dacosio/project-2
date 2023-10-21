import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "../../../src/components/base/Accordion";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Accordion> = {
  title: "Base/Accordion",
  component: () => {
    return (
      <Container>
        <Accordion label="Accordion">t</Accordion>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
