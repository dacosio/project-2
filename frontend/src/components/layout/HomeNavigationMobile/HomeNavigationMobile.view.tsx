import React, { useRef, useState } from "react";
import { HomeNavigationMobileProps } from "./HomeNavigationMobile.props";
import {
  Container,
  NavBackground,
  NavContainer,
  NavOptions,
} from "./HomeNavigationMobile.style";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "utils/hooks/useOnClickOutside";

const HomeNavigationMobile = (
  props: HomeNavigationMobileProps
): JSX.Element => {
  const ref = useRef(null);
  const [visible, setVisible] = useState("hidden");

  // useOnClickOutside(ref, () => {
  //   // console.log(props.open);
  //   if (props.open) setVisible("hidden");
  //   else setVisible("visible");
  // });
  return (
    <Container>
      {/* <NavBackground
        className={props.open ? "visible" : "hidden"}
      ></NavBackground> */}
      <NavContainer className={props.open ? "visible" : "hidden"} ref={ref}>
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
              <Link to="/#contact">Contact</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
          </ul>
        </NavOptions>
      </NavContainer>
    </Container>
  );
};

export default React.memo(HomeNavigationMobile);
