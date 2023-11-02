import React, { FC } from "react";
import { Close } from "../../../../src/components/base/SVG";
import { ModalProps } from "./Modal.props";
import {
  Container,
  ModalOverlay,
  ModalBox,
  ModalContent,
  ModalClose,
  ModalBack,
} from "./Modal.style";

const Modal: FC<ModalProps> = ({
  isOpen,
  uncloseable,
  onClose,
  onBack,
  children,
}) => {
  const outsideRef = React.useRef(null);

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (!uncloseable && e.target === outsideRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <Container>
      <ModalOverlay ref={outsideRef} onClick={handleCloseOnOverlay} />

      <ModalBox>
        {onBack && ( // Render back button only if onBack function is provided
          <ModalBack onClick={onBack}>Back</ModalBack>
        )}
        {!uncloseable && (
          <ModalClose onClick={onClose}>
            <Close width={20} height={20} />
          </ModalClose>
        )}

        <ModalContent>{children}</ModalContent>
      </ModalBox>
    </Container>
  ) : null;
};

export default React.memo(Modal);
