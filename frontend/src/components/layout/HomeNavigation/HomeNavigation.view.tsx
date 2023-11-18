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
import { NavLink, useLocation } from "react-router-dom";
import MobileNavBackground from "../../base/MobileNavBackground";

const HomeNavigation = (props: HomeNavigationProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery("(min-width: 992px)");
  const location = useLocation();

  return (
    <Container>
      <Nav>
        <Hamburger open={open} toggleOpen={() => setOpen(!open)} />
        <NavOptions>
          <NavLink to="/">
            <SproutLogo width={matches ? 200 : 99} />
          </NavLink>
          <ul>
          <li>
              <NavLink to="/#header" className={location.hash === "#header" ? "active-link" : "inactive-link"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/#about" className={location.hash === "#about" ? "active-link" : "inactive-link"}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/#features" className={location.hash === "#features" ? "active-link" : "inactive-link"}>
                Features
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" className={location.pathname === "/team" ? "active-link" : "inactive-link"}>
                Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/#contact" className={location.hash === "#contact" ? "active-link" : "inactive-link"}>
                Contact
              </NavLink>
            </li>
          </ul>
        </NavOptions>
        <LoginOptions>
          <LoginModal />
          <SignupModal />
        </LoginOptions>
      </Nav>
      <HomeNavigationMobile open={open} />
      <MobileNavBackground open={open} toggleOpen={() => setOpen(!open)} />
    </Container>
  );
};

export default React.memo(HomeNavigation);
