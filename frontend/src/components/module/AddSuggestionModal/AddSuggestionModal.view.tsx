import React from "react";
import { AddSuggestionModalProps } from "./AddSuggestionModal.props";
import { Container } from "./AddSuggestionModal.style";
import Modal from "../../base/Modal";
import AddSuggestion from "../../../components/base/AddSuggestion";

const AddSuggestionModal = (props: AddSuggestionModalProps): JSX.Element => {
  const { visibility, setVisibility } = props;

  const handleClose = () => {
    setVisibility(false);
  };

  return (
    <Modal isOpen={visibility} onClose={handleClose}>
      <Container>
        <AddSuggestion />
      </Container>
    </Modal>
  );
};

export default React.memo(AddSuggestionModal);
