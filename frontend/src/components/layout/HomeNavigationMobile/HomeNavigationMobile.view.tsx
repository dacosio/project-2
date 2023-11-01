import React, { useState } from "react";
import { HomeNavigationMobileProps } from "./HomeNavigationMobile.props";
import {
  Container,
  NavBackground,
  NavContainer,
  NavOptions,
} from "./HomeNavigationMobile.style";
import { Link } from "react-router-dom";

const HomeNavigationMobile = (
  props: HomeNavigationMobileProps
): JSX.Element => {
  return (
    <Container>
      <NavBackground
        className={props.open ? "visible" : "hidden"}
      ></NavBackground>
      <NavContainer className={props.open ? "visible" : "hidden"}>
        <NavOptions>
          <ul>
            <li>
              <Link to="/#header">Home</Link>
            </li>
            <li>
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link to="/#features">Features</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </NavOptions>
      </NavContainer>
    </Container>
  );
};

export default React.memo(HomeNavigationMobile);
