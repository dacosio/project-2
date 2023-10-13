import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CircleProgress from "../../../src/components/base/CircleProgress";
import Container from "../../components/Container";
import "react-circular-progressbar/dist/styles.css";
import Wrapper from "../../components/Wrapper";
const meta: Meta<typeof CircleProgress> = {
  title: "Base/CircleProgress",
  component: () => {
    return (
      <Container>
        <Wrapper>
          <CircleProgress
            maxValue={100}
            value={90}
            title="90"
            subtitle="days"
            style={{ height: 145, width: 145 }}
            size="desktop"
            id="desktop"
          />
        </Wrapper>
        <Wrapper>
          <CircleProgress
            maxValue={100}
            value={65}
            title="65"
            subtitle="days"
            style={{ height: 96, width: 96 }}
            size="mobile"
            id="mobile"
          />
        </Wrapper>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
