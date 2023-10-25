import React, { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AutoComplete from "../../../src/components/base/AutoComplete";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof AutoComplete> = {
  title: "Base/AutoComplete",
  component: () => {
    const options: string[] = [
      "option1",
      "option2",
      "option3",
      "option4",
      "option5",
    ];

    const [value1, setValue1] = useState<string | undefined>("option1");
    const [value2, setValue2] = useState<string | undefined>(undefined);

    useEffect(() => {
      console.log(value1);
    }, [value1]);

    useEffect(() => {
      console.log(value2);
    }, [value2]);

    return (
      <Container>
        <AutoComplete options={options} value={value1} setValue={setValue1} />
        <AutoComplete
          options={options}
          placeholder="Select"
          value={value2}
          setValue={setValue2}
        />
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
