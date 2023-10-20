import React from "react";
import { ModalViewPageGeneratedProps } from "./ModalViewPage.props";
import { Container } from "./ModalViewPage.style";
import SigninModal from "../../components/base/SigninModal";
import SignupModal from "../../components/base/SignupModal";
import ChoiceCropModal from "../../components/base/ChoiceCropModal";

const ModalViewPageView = (props: ModalViewPageGeneratedProps) => {

  return (
    <Container style={{display: "flex", gap: "1rem", padding: "1rem"}}>
      <SigninModal />
      <SignupModal />
      <ChoiceCropModal />
    </Container>
  );
};

export default ModalViewPageView;
