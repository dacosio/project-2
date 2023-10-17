import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Container from "../../components/Container";
import CropCondition from "./../../../src/components/base/CropCondition";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof CropCondition> = {
  title: "Base/CropCondition",
  component: () => {
    const conditions = [
      {
        title: "Temperature",
        output: "21-27°C",
      },
      {
        title: "Humidity",
        output: "65-85%",
      },
      {
        title: "Growth",
        output: "50-65 days",
      },
      {
        title: "Soil pH",
        output: "150-200",
      },
    ];

    const getCondition = () => {
      return conditions.map((con, i) => (
        <CropCondition key={i} title={con.title} output={con.output} />
      ));
    };

    return (
      <Container style={{ width: "227px", display: "block" }}>
        {getCondition()}
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
