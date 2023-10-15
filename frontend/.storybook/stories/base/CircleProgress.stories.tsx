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
          <Wrapper>
            <CircleProgress
              maxValue={100}
              value={100}
              title="90"
              subtitle="days"
              style={{ height: 145, width: 145 }}
              size="desktop"
              id="1"
            />
          </Wrapper>
          <Wrapper>
            <CircleProgress
              maxValue={100}
              value={51}
              title="51"
              subtitle="days"
              style={{ height: 145, width: 145 }}
              size="desktop"
              id="2"
            />
          </Wrapper>
          <Wrapper>
            <CircleProgress
              maxValue={100}
              value={25}
              title="25"
              subtitle="days"
              style={{ height: 145, width: 145 }}
              size="desktop"
              id="3"
            />
          </Wrapper>
        </Wrapper>
        <Wrapper>
          <Wrapper>
            <CircleProgress
              maxValue={100}
              value={100}
              title="90"
              subtitle="days"
              style={{ height: 96, width: 96 }}
              size="desktop"
              id="4"
            />
          </Wrapper>
          <Wrapper>
            <CircleProgress
              maxValue={100}
              value={51}
              title="51"
              subtitle="days"
              style={{ height: 96, width: 96 }}
              size="desktop"
              id="5"
            />
          </Wrapper>
          <Wrapper>
            <CircleProgress
              maxValue={100}
              value={25}
              title="25"
              subtitle="days"
              style={{ height: 96, width: 96 }}
              size="desktop"
              id="6"
            />
          </Wrapper>
        </Wrapper>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
