import React from "react";

import { Close } from "../../base/SVG";

import { ModalV2Props } from "./ModalV2.props";
import { Backdrop, ModalContainer, ExitButton } from "./ModalV2.style";

const Modal = (props: ModalV2Props): JSX.Element => {
  const { isOpen, onClickClose, children } = props;

  return (
    <Backdrop isOpen={isOpen}>
      <ModalContainer
        backgroundColor={props.backgroundColor}
        style={props.style}
      >
        <ExitButton
          onClick={(e) => {
            e.preventDefault();
            onClickClose();
          }}
        >
          <Close />
        </ExitButton>
        {children}
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;
