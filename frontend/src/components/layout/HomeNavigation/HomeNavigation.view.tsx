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

const HomeNavigation = (props: HomeNavigationProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const matches = useMediaQuery("(min-width: 992px)");

  console.log(matches);

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
          <Hidebutton
            text="Log in"
            variant="outline"
            style={matches ? { width: "160px" } : { width: "100px" }}
          ></Hidebutton>
          <Button
            text="Sign up"
            variant="primary"
            style={matches ? { width: "160px" } : { width: "100px" }}
          ></Button>
        </LoginOptions>
      </Nav>
      <HomeNavigationMobile open={open} />
    </Container>
  );
};

export default React.memo(HomeNavigation);
