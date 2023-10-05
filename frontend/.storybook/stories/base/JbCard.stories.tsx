import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import JbCard from "../../../src/components/base/JbCard";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof JbCard> = {
  title: "Base/JbCard",
  component: () => {
 
    return (
      <div style={{ display: "grid", gap: "32px" }}>
        <JbCard title='Headline' description='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'/>
      </div>
    );
  },

};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
