import React from "react";
import { AddSuggestionModalProps } from "./AddSuggestionModal.props";
import { Container } from "./AddSuggestionModal.style";
import Modal from "../../base/Modal";
import AddSuggestion from "../../../components/base/AddSuggestion";

const AddSuggestionModal = (props: AddSuggestionModalProps): JSX.Element => {
  const { visibility, setVisibility, onLater, onNow } = props;

  const handleClose = () => {
    setVisibility(false);
  };

  return (
    <Modal isOpen={visibility} onClose={handleClose}>
      <Container>
        <AddSuggestion
          visibility={visibility}
          setVisibility={setVisibility}
          onLater={onLater}
          onNow={onNow}
        />
      </Container>
    </Modal>
  );
};

export default React.memo(AddSuggestionModal);
