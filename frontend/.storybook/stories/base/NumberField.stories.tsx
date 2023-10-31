import React, { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import NumberField from "../../../src/components/base/NumberField";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof NumberField> = {
  title: "Base/NumberField",
  component: () => {
    const [value, setValue] = useState<string | undefined>(undefined);

    useEffect(() => {
      console.log(value);
    }, [value]);

    return (
      <Container>
        <NumberField value={value} setValue={setValue} />
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
