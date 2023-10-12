import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../../../src/components/base/Modal";
import TypographyView from "../../../src/components/base/Typography/Typography.view";
import Container from "../../components/Container";

const meta: Meta<typeof Modal> = {
  title: "Base/Modal",
  component: () => {
    const [isModalOpen, setModalState] = React.useState(false);

    const toggleModal = () => setModalState(!isModalOpen);

    return (
      <Container background="white">
        <button className={"app__btn"} onClick={toggleModal}>
          Start now!
        </button>
        <Modal
          title={"This is my modal"}
          isOpen={isModalOpen}
          onClose={toggleModal}
          onBack={toggleModal}
        >
          <TypographyView variant="title4">This is a modal</TypographyView>
          <TypographyView variant="body">
            This is an example modal content This is an example modal content
            This is an example modal content This is an example modal content
            This is an example modal content This is an example modal content
            This is an example modal content This is an example modal content
            This is an example modal content This is an example modal content
            This is an example modal content This is an example modal content
            This is an example modal content This is an example modal content
            This is an example modal content This is an example modal content
            This is an example modal content This is an example modal content
            This is an example modal content This is an example modal content
            This is an example modal content This is an example modal content
            This is an example modal content This is an example modal content
            This is an example modal content This is an example modal content
            This is an example modal content
          </TypographyView>
        </Modal>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
