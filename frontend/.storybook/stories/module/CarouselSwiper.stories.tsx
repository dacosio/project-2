import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CarouselSwiper from "../../../src/components/module/CarouselSwiper";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import HarvestCard from "../../../src/components/module/HarvestCard";

const meta: Meta<typeof CarouselSwiper> = {
  title: "Module/CarouselSwiper",
  component: () => {
    return (
      <Container>
        <CarouselSwiper
          slidesPerView={2}
          spaceBetween={16}
          slides={[
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
            />,
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
            />,
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
            />,
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
            />,
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
            />,
          ]}
        />
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
