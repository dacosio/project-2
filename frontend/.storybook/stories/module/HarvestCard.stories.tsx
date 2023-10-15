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
        <Wrapper>
          <HarvestCard
            cropName="Carrot"
            maxValue={100}
            value={65}
            title="65"
            subtitle="days"
            size="desktop"
            id="1"
            datePlanted="Jan 1, 2023"
            estYield="xx lb/plant"
            height={137}
            width={137}
          />
          <HarvestCard
            cropName="Carrot"
            maxValue={100}
            value={25}
            title="25"
            subtitle="days"
            size="desktop"
            id="2"
            datePlanted="Jan 1, 2023"
            estYield="xx lb/plant"
            height={82}
            width={82}
            mobile
          />
        </Wrapper>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
