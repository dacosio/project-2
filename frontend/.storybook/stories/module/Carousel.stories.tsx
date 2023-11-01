import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "../../../src/components/module/Carousel";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const meta: Meta<typeof Carousel> = {
  title: "Module/Carousel",
  component: () => {
    return (
      <Carousel>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Carousel>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
