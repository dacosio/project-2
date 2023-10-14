import React, { useState } from "react";
import { HamburgerProps } from "./Hamburger.props";
import { Container, StyledBurger } from "./Hamburger.style";
import HomeNavigationMobile from "components/layout/HomeNavigationMobile";

const Hamburger = (props: HamburgerProps): JSX.Element => {
  const { open, toggleOpen } = props;

  const handleBurgerClick = () => {
    // Call the toggleOpen function to update the state
    toggleOpen();
    console.log("Burger status:", open ? "open" : "closed");
  };


  return (
    <Container>
      <StyledBurger open={open} onClick={handleBurgerClick}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
    </Container>
  );
};

export default React.memo(Hamburger);
