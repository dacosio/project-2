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
import { SproutLogo } from "../../base/SVG";
import { Link } from "react-router-dom";

const HomeNavigation = (props: HomeNavigationProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const matches = useMediaQuery("(min-width: 992px)");

  return (
    <Container>
      <Nav>
        <Hamburger open={open} toggleOpen={() => setOpen(!open)} />
        <NavOptions>
          <Link to={"/"}>
            <SproutLogo width={matches ? 200 : 99} />
          </Link>
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
