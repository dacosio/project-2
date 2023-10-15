import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import HarvestCard from "../../../src/components/module/HarvestCard";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof HarvestCard> = {
  title: "Module/HarvestCard",
  component: () => {
    return (
      <Container>
        <HarvestCard
          cropName="Carrot"
          maxValue={100}
          value={65}
          title="65"
          subtitle="days"
          style={{ height: 145, width: 145 }}
          size="desktop"
          id="1"
        />
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
