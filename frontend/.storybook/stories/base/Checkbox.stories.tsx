import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "../../../src/components/base/Checkbox";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Checkbox> = {
  title: "Base/Checkbox",
  component: () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    useEffect(() => {
      console.log(`isChecked :: ${isChecked}`);
    }, [isChecked]);

    return (
      <div style={{ display: "grid", gap: "32px" }}>
       <Checkbox checkboxStatus={isChecked} setCheckboxStatus={setIsChecked} />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
