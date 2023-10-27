import React from "react";
import { LoginModalProps } from "./LoginModal.props";
import { Container } from "./LoginModal.style";
import Button from "../Button";
import Modal from "../Modal";
import Signin from "../Signin";
import { useMediaQuery } from "../../../utils/hooks/useMediaQuery";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectSignInModal,
  selectSignUpModal,
  toggleSignIn,
  toggleSignUp,
} from "features/authModal/authModalSlice";

const LoginModal = (props: LoginModalProps): JSX.Element => {
  const matches = useMediaQuery("(min-width: 992px)");
  const dispatch = useAppDispatch();
  const signInModalState = useAppSelector(selectSignInModal);

  const toggleModal = () => {
    dispatch(toggleSignIn(!signInModalState));
    dispatch(toggleSignUp(false));
  };

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
        isOpen={signInModalState}
        onClose={toggleModal}>
        <Signin />
      </Modal>
    </Container>
  );
};

export default React.memo(LoginModal);
