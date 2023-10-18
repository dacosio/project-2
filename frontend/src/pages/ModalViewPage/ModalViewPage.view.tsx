import React from "react";
import { ModalViewPageGeneratedProps } from "./ModalViewPage.props";
import { Container } from "./ModalViewPage.style";
import SigninModal from "components/base/SigninModal";
import ChoiceCropModal from "components/base/ChoiceCropModal";

const ModalViewPageView = (props: ModalViewPageGeneratedProps) => {
  const [isModalOpen, setModalState] = React.useState(false);

  const toggleModal = () => setModalState(!isModalOpen);

  return (
    <Container>
      <SigninModal />
      <ChoiceCropModal />
    </Container>
  );
};

export default ModalViewPageView;
