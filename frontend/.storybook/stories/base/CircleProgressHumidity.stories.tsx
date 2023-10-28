import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CircleProgressHumidity from "../../../src/components/base/CircleProgressHumidity";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof CircleProgressHumidity> = {
  title: "Base/CircleProgressHumidity",
  component: () => {
    return (
      <Container>
        <Wrapper>
          <Wrapper>
            <CircleProgressHumidity
              maxValue={100}
              value={100}
              title="90"
              subtitle="%"
              style={{ height: 145, width: 145 }}
              size="desktop"
              id="1"
            />
          </Wrapper>
          <Wrapper>
            <CircleProgressHumidity
              maxValue={100}
              value={51}
              title="51"
              subtitle="%"
              style={{ height: 145, width: 145 }}
              size="desktop"
              id="2"
            />

            <CircleProgressHumidity
              maxValue={100}
              value={25}
              title="25"
              subtitle="%"
              style={{ height: 145, width: 145 }}
              size="desktop"
              id="3"
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
