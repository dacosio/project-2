import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ModalV2 from "../../../src/components/layout/ModalV2";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import Button from "../../../src/components/base/Button";

const meta: Meta<typeof ModalV2> = {
  title: "Layout/ModalV2",
  component: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Container>
        <Button
          onClick={() => setIsOpen(true)}
          text="Open"
          variant="primary"
          style={{ marginBottom: "5px" }}
        />
        <ModalV2
          isOpen={isOpen}
          onClickClose={() => setIsOpen((prev) => !prev)}
        >
          I am a modal
        </ModalV2>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
