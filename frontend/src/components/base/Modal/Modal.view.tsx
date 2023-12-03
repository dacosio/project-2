import React, { FC } from "react";
import { ArrowLeft, Close } from "../../../../src/components/base/SVG";
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
  width,
  isOpen,
  uncloseable,
  onClose,
  onBack,
  padded,
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

      <ModalBox width={width}>
        <div style={{ paddingTop: padded ? "64px" : undefined }}>
          {onBack && ( // Render back button only if onBack function is provided
            <ModalBack onClick={onBack}>
              <ArrowLeft />
              Prev
            </ModalBack>
          )}
          {!uncloseable && (
            <ModalClose onClick={onClose}>
              <Close width={20} height={20} />
            </ModalClose>
          )}
        </div>

        <ModalContent>{children}</ModalContent>
        <div style={{ paddingBottom: padded ? "16px" : undefined }}></div>
      </ModalBox>
    </Container>
  ) : null;
};

export default React.memo(Modal);
