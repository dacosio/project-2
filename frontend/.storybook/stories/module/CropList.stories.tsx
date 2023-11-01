import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CropList from "../../../src/components/module/CropList";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { Crop } from "../../../src/types/store/CropState";

const meta: Meta<typeof CropList> = {
  title: "Module/CropList",
  component: () => {
    const crops: Crop[] = [
      {
        _id: "id",
        cropName: "Lorem",
        description: "Lorem ipsum.",
        idealTemperature: {
          fahrenheit: {
            min: 45,
            max: 70,
          },
          celcius: {
            min: 5,
            max: 20,
          },
        },
        humidity: {
          min: 80,
          max: 90,
        },
        growthDuration: {
          min: 42,
          max: 56,
        },
        soilPh: {
          min: 6.5,
          max: 7,
        },
        soilN: 10,
        soilP: 10,
        soilK: 10,
        growingTips: ["Lorem ipsum.", "dolor sit amet."],
        tools: ["Lorem", "Ipsum"],
        imageURL:
          "https://res.cloudinary.com/dqkmua29w/image/upload/v1697606726/crops/xpsdnskowld9pjbt3sla.webp",
        userId: "user",
        isFavorite: false,
        isPlanted: true,
        datePlanted: new Date(),
        estimatedYield: "10",
        __v: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return (
      <Container>
        <div style={{ flexGrow: "1" }}>
          <CropList
            crops={crops}
            crop={crops[0]}
            options={[
              { value: "all", label: "All" },
              { value: "planted", label: "Planted" },
              { value: "to-plant", label: "To Plant" },
            ]}
            option={undefined}
            setOption={() => null}
            handleOnClickCrop={() => null}
            handleOnClickChoice={() => null}
            handleOnClickSuggestion={() => null}
          />
        </div>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
