import React from "react";
import { HamburgerProps } from "./Hamburger.props";
import { Container, StyledBurger } from "./Hamburger.style";

const Hamburger = (props: HamburgerProps): JSX.Element => {
  return (
    <Container>
      <StyledBurger>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
    </Container>
  );
};

export default React.memo(Hamburger);
