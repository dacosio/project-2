import React from "react";
import { SignupModalProps } from "./SignupModal.props";
import { Container } from "./SignupModal.style";
import Button from "../Button";
import Modal from "../Modal";
import Signup from "../Signup";
import { useMediaQuery } from "../../../utils/hooks/useMediaQuery";

const SignupModal = (props: SignupModalProps): JSX.Element => {
  const [isModalOpen, setModalState] = React.useState(false);
  const matches = useMediaQuery("(min-width: 992px)");

  const toggleModal = () => setModalState(!isModalOpen);

  return (
    <Container>
      <Button
        text="Sign up"
        variant="primary"
        onClick={toggleModal}
        style={matches ? { width: "160px" } : { width: "100px" }}
      />
      <Modal
        title={"This is my modal"}
        isOpen={isModalOpen}
        onClose={toggleModal}
      >
        <Signup />
      </Modal>
    </Container>
  );
};

export default React.memo(SignupModal);
