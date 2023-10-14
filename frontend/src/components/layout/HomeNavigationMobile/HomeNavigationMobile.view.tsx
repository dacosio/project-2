import React, { useState } from "react";
import { HomeNavigationMobileProps } from "./HomeNavigationMobile.props";
import { 
  Container,
  NavOptions,
} from "./HomeNavigationMobile.style";

const HomeNavigationMobile = (
  props: HomeNavigationMobileProps
): JSX.Element => {

  return (
    <Container className={props.open ? "visible" : "hidden"}>
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
    </Container>
  );
};

export default React.memo(HomeNavigationMobile);
