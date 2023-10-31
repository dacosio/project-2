import React from "react";
import { AddChoiceModalProps } from "./AddChoiceModal.props";
import { Container } from "./AddChoiceModal.style";
import Modal from "../../../components/base/Modal";
import AddChoice from "../../../components/base/AddChoice";

const AddChoiceModal = (props: AddChoiceModalProps): JSX.Element => {
  const { visibility, setVisibility, onLater, onNow } = props;

  const handleClose = () => {
    setVisibility(false);
  };

  return (
    <Modal isOpen={visibility} onClose={handleClose}>
      <Container>
        <AddChoice onLater={onLater} onNow={onNow} />
      </Container>
    </Modal>
  );
};

export default React.memo(AddChoiceModal);
