import React from "react";
import { SignupModalProps } from "./SignupModal.props";
import { Container } from "./SignupModal.style";
import Button from "../Button";
import Modal from "../Modal";
import Signup from "../Signup";
import { useMediaQuery } from "../../../utils/hooks/useMediaQuery";
import {
  selectSignUpModal,
  toggleSignIn,
  toggleSignUp,
} from "../../../features/authModal/authModalSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

const SignupModal = (props: SignupModalProps): JSX.Element => {
  const [isModalOpen, setModalState] = React.useState(false);
  const matches = useMediaQuery("(min-width: 992px)");

  const dispatch = useAppDispatch();
  const signUpModalState = useAppSelector(selectSignUpModal);

  const toggleModal = () => {
    dispatch(toggleSignUp(!signUpModalState));
    dispatch(toggleSignIn(false));
  };
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
        isOpen={signUpModalState}
        onClose={toggleModal}>
        <Signup />
      </Modal>
    </Container>
  );
};

export default React.memo(SignupModal);
