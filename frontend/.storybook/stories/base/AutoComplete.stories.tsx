import React, { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AutoComplete from "../../../src/components/base/AutoComplete";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { Option } from "../../../src/components/base/AutoComplete/AutoComplete.props";

const meta: Meta<typeof AutoComplete> = {
  title: "Base/AutoComplete",
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
        <AutoComplete options={options} />
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
