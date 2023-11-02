import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CropDetail from "../../../src/components/module/CropDetail";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { Crop } from "../../../src/types/store/CropState";
import { Provider } from "react-redux";
import { store } from "../../../src/app/store";

const meta: Meta<typeof CropDetail> = {
  title: "Module/CropDetail",
  component: () => {
    const crop: Crop = {
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
    };

    return (
      <Container>
        <Provider store={store}>
          <div style={{ flexGrow: "1" }}>
            <CropDetail
              crop={crop}
              onConfirm={() => null}
              handleFavorite={() => null}
              handleOnDelete={() => null}
            />
          </div>
        </Provider>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
