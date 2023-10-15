import React, { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Tab from "../../../src/components/base/Tab";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { Option } from "../../../src/components/base/Tab/Tab.props";

const meta: Meta<typeof Tab> = {
  title: "Base/Tab",
  component: () => {
    const options: Option[] = [
      { value: "value1", label: "label1" },
      { value: "value2", label: "label2" },
      { value: "value3", label: "label3" },
      { value: "value4", label: "label4" },
      { value: "value5", label: "label5" },
    ];

    const [value1, setValue1] = useState<string | undefined>("value3");
    const [value2, setValue2] = useState<string | undefined>(undefined);

    useEffect(() => {
      console.log(value1);
    }, [value1]);

    useEffect(() => {
      console.log(value2);
    }, [value2]);

    return (
      <Container>
        <Tab
          options={options}
          value={value1}
          setValue={setValue1}
          name="test1"
        />
        <Tab
          options={options}
          value={value2}
          setValue={setValue2}
          name="test2"
        />
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
