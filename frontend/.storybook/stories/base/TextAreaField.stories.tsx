import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TextAreaField from "../../../src/components/base/TextAreaField";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof TextAreaField> = {
  title: "Base/TextAreaField",
  component: () => {
    // const [isChecked, setIsChecked] = useState<boolean>(false);

    // useEffect(() => {
    //   console.log(`isChecked :: ${isChecked}`);
    // }, [isChecked]);

    return (
      <div style={{ display: "grid", gap: "32px" }}>
        <TextAreaField></TextAreaField>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
