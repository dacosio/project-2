import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../../../src/components/base/Modal";
import TypographyView from "../../../src/components/base/Typography/Typography.view";

const meta: Meta<typeof Modal> = {
  title: "Base/Modal",
  component: () => {
    const [isModalOpen, setModalState] = React.useState(false);

    const toggleModal = () => setModalState(!isModalOpen);

    return (
      <div>
        <button className={"app__btn"} onClick={toggleModal}>
          Start now!
        </button>
        <Modal
          title={"This is my modal"}
          isOpen={isModalOpen}
          onClose={toggleModal}
        >
          This is an example modal content
        </Modal>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
