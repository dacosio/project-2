import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SegmentedControl from "../../../src/components/base/SegmentedControl";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof SegmentedControl> = {
  title: "Base/SegmentedControl",
  component: () => {
    const MOCK_OPTIONS = ["Today", "15-day"];
    const [state, setState] = useState(MOCK_OPTIONS[0]);
    return (
      <Container>
        <SegmentedControl
          options={MOCK_OPTIONS}
          selectedOption={state}
          onClickControl={(value) => {
            console.log(value);
            setState(value);
          }}
        />
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
