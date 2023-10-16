import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CropList from "../../../src/components/module/CropList";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof CropList> = {
  title: "Module/CropList",
  component: () => {
    const crops: { id: string; name: string; isPlanted: boolean }[] = [
      { id: "1", name: "Crop1", isPlanted: true },
      { id: "2", name: "Crop2", isPlanted: false },
      { id: "3", name: "Crop3", isPlanted: true },
      { id: "4", name: "Crop4", isPlanted: true },
      { id: "5", name: "Crop5", isPlanted: true },
      { id: "6", name: "Crop6", isPlanted: false },
      { id: "7", name: "Crop7", isPlanted: true },
      { id: "8", name: "Crop8", isPlanted: true },
      { id: "9", name: "Crop9", isPlanted: true },
      { id: "10", name: "Crop10", isPlanted: false },
      { id: "11", name: "Crop11", isPlanted: true },
      { id: "12", name: "Crop12", isPlanted: true },
      { id: "13", name: "Crop13", isPlanted: false },
      { id: "14", name: "Crop14", isPlanted: true },
    ];

    const handleOnClickCrop = (id: string) => {
      console.log(id);
    };

    const handleOnCreateCrop = () => {
      console.log("Create");
    };

    return (
      <Container>
        <div style={{ flexGrow: "1" }}>
          <CropList
            crops={crops}
            handleOnClickCrop={handleOnClickCrop}
            handleOnCreateCrop={handleOnCreateCrop}
          />
        </div>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
