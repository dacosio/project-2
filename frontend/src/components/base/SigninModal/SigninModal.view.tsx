import React from "react";
import { SigninModalProps } from "./SigninModal.props";
import { Container } from "./SigninModal.style";
import Button from "../Button";
import Modal from "../Modal";
import Signin from "../Signin";
import { useMediaQuery } from "../../../utils/hooks/useMediaQuery";

const SigninModal = (props: SigninModalProps): JSX.Element => {
  const [isModalOpen, setModalState] = React.useState(false);
  const matches = useMediaQuery("(min-width: 992px)");

  const toggleModal = () => setModalState(!isModalOpen);

  return (
    <Container>
      <Button
        text="Sign in"
        variant="outline"
        onClick={toggleModal}
        style={matches ? { width: "160px" } : { width: "100px" }}
      />
      <Modal
        title={"This is my modal"}
        isOpen={isModalOpen}
        onClose={toggleModal}
      >
        <Signin />
      </Modal>
    </Container>
  );
};

export default React.memo(SigninModal);
