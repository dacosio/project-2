import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CropDetail from "../../../src/components/module/CropDetail";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof CropDetail> = {
  title: "Module/CropDetail",
  component: () => {
    const crop: { id: string; name: string; isPlanted: boolean } = {
      id: "1",
      name: "Crop1",
      isPlanted: true,
    };

    const handleOnFavorite = (id: string) => {
      console.log(id);
    };

    const handleOnDelete = (id: string) => {
      console.log(id);
    };

    return (
      <Container>
        <div style={{ flexGrow: "1" }}>
          <CropDetail
            crop={crop}
            handleOnFavorite={handleOnFavorite}
            handleOnDelete={handleOnDelete}
          />
        </div>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
