import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Card from "../../../src/components/base/Card";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Card> = {
  title: "Base/Card",
  component: () => {
    return (
      <Card
        headerText="New Card"
        subText="Some Subtitle"
        image="https://fastly.picsum.photos/id/235/1200/500.jpg?hmac=QZQVKfjXK390HjcIi_E2NKw_DvFZjBz41k6PKJCE5ho"
        description="some description about the image"
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
