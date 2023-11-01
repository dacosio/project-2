import React, { useState } from "react";
import { HomeNavigationProps } from "./HomeNavigation.props";
import {
  Container,
  Nav,
  NavOptions,
  LoginOptions,
  Hidebutton,
  Logo,
} from "./HomeNavigation.style";

import Hamburger from "../../base/Hamburger";
import Button from "../../base/Button";
import { useMediaQuery } from "../../../utils/hooks/useMediaQuery";
import HomeNavigationMobile from "../HomeNavigationMobile";
import SignupModal from "../../base/SignupModal";
import LoginModal from "../../base/LoginModal";

const HomeNavigation = (props: HomeNavigationProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const matches = useMediaQuery("(min-width: 992px)");

  return (
    <Container>
      <Nav>
        <Hamburger open={open} toggleOpen={() => setOpen(!open)} />
        <NavOptions>
          <Logo width={matches ? 200 : 99} />
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
          <LoginModal />
          <SignupModal />
        </LoginOptions>
      </Nav>
      <HomeNavigationMobile open={open} />
    </Container>
  );
};

export default React.memo(HomeNavigation);
