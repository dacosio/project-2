import React from "react";
import { NavigationHeaderProps } from "./NavigationHeader.props";
import { Container } from "./NavigationHeader.style";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  selectBroken,
  selectToggle,
  sendToggle,
} from "features/sidebar/sidebarSlice";

import { RxHamburgerMenu } from "react-icons/rx";
import UserAvatar from "components/base/UserAvatar";

const NavigationHeader = (props: NavigationHeaderProps): JSX.Element => {
  const broken = useAppSelector(selectBroken);
  const dispatch = useAppDispatch();
  const toggleState = useAppSelector(selectToggle);
  const handleToggle = () => {
    dispatch(sendToggle(!toggleState));
  };
  return (
    <Container>
      <div>
        {broken && (
          <RxHamburgerMenu
            size="24px"
            style={{ cursor: "pointer" }}
            onClick={handleToggle}
          />
        )}
      </div>

      <div style={{ textAlign: "right", borderRadius: "16px" }}>
        <UserAvatar
          email="sprout@langara.ca"
          size="56"
          round="16px"
          imageUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        />
      </div>
    </Container>
  );
};

export default React.memo(NavigationHeader);
