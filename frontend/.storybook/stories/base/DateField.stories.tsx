import React, { ChangeEvent, useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DateField from "../../../src/components/base/DateField";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof DateField> = {
  title: "Base/DateField",
  component: () => {
    const [value, setValue] = useState<string | undefined>("");

    const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      console.log(event.target.value);
    };

    useEffect(() => {
      if (value) {
        console.log(`value :: ${value}`);
      }
    }, [value]);

    return (
      <Container>
        <div style={{ display: "flex", alignItems: "start", gap: "32px" }}>
          <DateField value={value} setValue={setValue} />
        </div>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
