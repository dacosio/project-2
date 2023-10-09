import React, { FC } from "react";
import TypographyView from "../Typography/Typography.view";
import { Close } from "../../../../src/components/base/SVG";
import { ModalProps } from "./Modal.props";
import {
  Container,
  ModalOverlay,
  ModalBox,
  ModalTitle,
  ModalContent,
  ModalClose,
} from "./Modal.style";

const Modal: FC<ModalProps> = ({ isOpen, title, onClose, children }) => {
  const outsideRef = React.useRef(null);

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <Container>
      <ModalOverlay ref={outsideRef} onClick={handleCloseOnOverlay} />
      <ModalBox>
        <ModalClose onClick={onClose}>
          {/* <Close width={30} height={30} /> */}X
        </ModalClose>

        <ModalTitle>{title}</ModalTitle>
        {/* <TypographyView variant="title5">{title}</TypographyView> */}
        <ModalContent>{children}</ModalContent>
      </ModalBox>
    </Container>
  ) : null;
};

export default React.memo(Modal);
