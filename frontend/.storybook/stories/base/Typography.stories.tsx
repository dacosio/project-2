import type { Meta, StoryObj } from "@storybook/react";

import Typography from "../../../src/components/base/Typography";

const meta: Meta<typeof Typography> = {
  title: "Base/Typography",
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    children: "Title1",
    variant: "title2",
    textColor: "primary",
  },
};
