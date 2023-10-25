import React, { useState } from "react";
import { HomeNavigationMobileProps } from "./HomeNavigationMobile.props";
import {
  Container,
  NavBackground,
  NavContainer,
  NavOptions,
} from "./HomeNavigationMobile.style";

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
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </NavOptions>
      </NavContainer>
    </Container>
  );
};

export default React.memo(HomeNavigationMobile);
