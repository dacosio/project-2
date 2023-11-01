import React, { useRef, useState } from "react";
import { HomeNavigationMobileProps } from "./HomeNavigationMobile.props";
import {
  Container,
  NavBackground,
  NavContainer,
  NavOptions,
} from "./HomeNavigationMobile.style";
import { useOnClickOutside } from "utils/hooks/useOnClickOutside";

const HomeNavigationMobile = (
  props: HomeNavigationMobileProps
): JSX.Element => {
  const ref = useRef(null);
  const [visible, setVisible] = useState("hidden");
  useOnClickOutside(ref, () => {
    // console.log(props.open);
    if (props.open) setVisible("hidden");
    else setVisible("visible");
  });
  return (
    <Container>
      <NavBackground className={visible}></NavBackground>
      <NavContainer className={visible} ref={ref}>
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
