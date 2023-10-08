import React from "react";
import TypographyView from "../Typography/Typography.view";
import { Close } from "../SVG";
import { ModalProps } from "./Modal.props";
import {
  ModalBackground,
  ModalContainer,
  ModalCloseButtonContainer,
  ModalCloseButton,
  ModalTitle,
} from "./Modal.style";

const Modal = (props: ModalProps): JSX.Element => {
  const { modalTitle, ...modalProps } = props;

  const handleClick = () => {
    console.log("Hello Hello");
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <ModalCloseButtonContainer>
          <ModalCloseButton onClick={handleClick}>
            {/* <Close width={30} height={30} /> */}X
          </ModalCloseButton>
        </ModalCloseButtonContainer>
        <ModalTitle>
          {/* <TypographyView variant="title5">{props.modalTitle}</TypographyView> */}
          <h3>{props.modalTitle}</h3>
        </ModalTitle>
      </ModalContainer>
    </ModalBackground>
  );
};

export default React.memo(Modal);
