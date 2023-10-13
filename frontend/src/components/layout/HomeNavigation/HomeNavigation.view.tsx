import React from "react";
import { HomeNavigationProps } from "./HomeNavigation.props";
import {
  Container,
  Nav,
  NavOptions,
  LoginOptions,
  Hidebutton
} from "./HomeNavigation.style";

import Hamburger from "components/base/Hamburger";
import { SproutLogo } from "components/base/SVG";
import Button from "components/base/Button";

const HomeNavigation = (props: HomeNavigationProps): JSX.Element => {
  return (
    <Container>
      <Nav>
        <Hamburger />
        <NavOptions>
          <SproutLogo width={200} />
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
        <LoginOptions>
          <Hidebutton
            text="Log in"
            variant="outline"
            style={{
              width: "160px",
            }}
          ></Hidebutton>
          <Button
            text="Sign up"
            variant="primary"
            style={{
              width: "160px",
            }}
          ></Button>
        </LoginOptions>
      </Nav>
    </Container>
  );
};

export default React.memo(HomeNavigation);