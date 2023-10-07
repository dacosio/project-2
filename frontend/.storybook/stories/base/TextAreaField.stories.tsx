import React, { ChangeEvent, useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TextAreaField from "../../../src/components/base/TextAreaField";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof TextAreaField> = {
  title: "Base/TextAreaField",
  component: () => {
    const [value, setValue] = useState<string>("");

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
          <TextAreaField
            label="TextArea"
            placeholder="textarea"
            error="Error!"
            onChange={handleOnChange}
          ></TextAreaField>
          <TextAreaField
            label="TextArea"
            placeholder="textarea"
            error="Error!"
            setValue={setValue}
          ></TextAreaField>
        </div>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
