import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Yuhwan from "../../../src/components/base/Yuhwan";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Yuhwan> = {
  title: "Base/Yuhwan",
  component: () => {
    return (
      <Container center style={{ boxSizing: "border-box", width: "360px" }}>
        <Yuhwan
          avatar="https://picsum.photos/300/300?random=1"
          title="Headline"
          subtitle="Subtitle"
          image="https://picsum.photos/300/300?random=2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          tempore odit aliquam soluta excepturi, id aspernatur, cum libero
          eligendi et accusantium. Officia optio facere est maxime accusamus
          dolores molestias dicta minima iusto?"
        />
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
