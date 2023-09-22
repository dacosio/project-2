import React, { ChangeEvent, useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Switch from "../../../src/components/base/Switch";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Switch> = {
  title: "Base/Switch",
  component: () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    useEffect(() => {
      console.log(`isChecked :: ${isChecked}`);
    }, [isChecked]);

    return (
      <div style={{ display: "grid", gap: "32px" }}>
        <Switch size="sm" value={isChecked} setValue={setIsChecked} />
        <Switch value={isChecked} setValue={setIsChecked} />
        <Switch size="lg" value={isChecked} setValue={setIsChecked} />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
