import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CropInformation from "../../../src/components/module/CropInformation";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof CropInformation> = {
  title: "Module/CropInformation",
  component: () => {
    return (
      <Container>
        <CropInformation
          ph="0.0 - 0.0"
          nitrogen="0"
          phosphorus="0"
          potassium="0"
          suggestions={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Phasellus aliquam metus nec nulla ullamcorper tempor.",
            "Pellentesque vitae urna ut lectus mattis ullamcorper et ac felis.",
          ]}
          tips={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Phasellus aliquam metus nec nulla ullamcorper tempor.",
            "Pellentesque vitae urna ut lectus mattis ullamcorper et ac felis.",
          ]}
        />
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
