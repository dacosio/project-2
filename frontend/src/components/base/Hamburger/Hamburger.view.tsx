import React, { useRef, useState } from "react";
import { HamburgerProps } from "./Hamburger.props";
import { Container, StyledBurger } from "./Hamburger.style";
// import HomeNavigationMobile from "components/layout/HomeNavigationMobile";
// import { useOnClickOutside } from "utils/hooks/useOnClickOutside";

const Hamburger = (props: HamburgerProps): JSX.Element => {
  const { open, toggleOpen } = props;
  const ref = useRef(null);

  const handleBurgerClick = () => {
    toggleOpen();
  };

  // useOnClickOutside(ref, handleBurgerClick);

  return (
    <Container ref={ref}>
      <StyledBurger open={open} onClick={handleBurgerClick}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
    </Container>
  );
};

export default React.memo(Hamburger);
