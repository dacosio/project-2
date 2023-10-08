import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../../../src/components/base/Modal";

const meta: Meta<typeof Modal> = {
  title: "Base/Modal",
  component: () => {
    return <Modal modalTitle="Do you want to continue" />;
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
