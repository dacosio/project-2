import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import PlantCropModal from "../../../src/components/module/PlantCropModal";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof PlantCropModal> = {
  title: "Module/PlantCropModal",
  component: () => {
    return (
      <Container>
        <div>Null</div>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
