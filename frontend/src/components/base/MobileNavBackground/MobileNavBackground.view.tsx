import React, { useRef, useState } from "react";
import { MobileNavBackgroundProps } from "./MobileNavBackground.props";
import { Container, NavBackground } from "./MobileNavBackground.style";

const MobileNavBackground = (props: MobileNavBackgroundProps): JSX.Element => {
  const { open, toggleOpen } = props;
  const ref = useRef(null);

  const handleBurgerClick = () => {
    toggleOpen();
  };

  return (
    <Container ref={ref}>
      {" "}
      <NavBackground open={open} onClick={handleBurgerClick} />{" "}
    </Container>
  );
};

export default React.memo(MobileNavBackground);
