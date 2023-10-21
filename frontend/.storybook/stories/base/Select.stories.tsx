import React, { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SelectDown from "../../../src/components/base/SelectDown";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { Option } from "../../../src/components/base/SelectDown/SelectDown.props";

const meta: Meta<typeof SelectDown> = {
  title: "Base/SelectDown",
  component: () => {
    const options: Option[] = [
      { value: "value1", label: "label1" },
      { value: "value2", label: "label2" },
      { value: "value3", label: "label3" },
      { value: "value4", label: "label4" },
      { value: "value5", label: "label5" },
    ];

    const [value1, setValue1] = useState<string | undefined>("value3");
    const [value3, setValue3] = useState<string | undefined>(undefined);
    const [value2, setValue2] = useState<string | undefined>("value3");

    useEffect(() => {
      console.log(value1);
    }, [value1]);

    useEffect(() => {
      console.log(value3);
    }, [value3]);

    useEffect(() => {
      console.log(value2);
    }, [value2]);

    return (
      <Container>
        <SelectDown value={value1} setValue={setValue1} options={options} />
        <SelectDown
          label="Select"
          value={value3}
          setValue={setValue3}
          options={options}
        />
        <SelectDown
          label="Select"
          value={value2}
          setValue={setValue2}
          options={options}
        />
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
