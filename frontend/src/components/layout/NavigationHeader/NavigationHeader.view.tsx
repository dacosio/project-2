import React, { useState, useRef } from "react";
import { NavigationHeaderProps } from "./NavigationHeader.props";
import {
  AvatarWrapper,
  BellWrapper,
  Container,
  LogOutContainer,
} from "./NavigationHeader.style";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  selectBroken,
  selectToggle,
  sendToggle,
} from "features/sidebar/sidebarSlice";

import { RxHamburgerMenu } from "react-icons/rx";
import UserAvatar from "components/base/UserAvatar";
import { useOnClickOutside } from "utils/hooks/useOnClickOutside";
import Typography from "components/base/Typography";
import { logOut } from "features/auth/authSlice";
import { useSendLogoutMutation } from "features/auth/authApiSlice";
import { useNavigate } from "react-router";
import { Bell } from "components/base/SVG";

const NavigationHeader = (props: NavigationHeaderProps): JSX.Element => {
  const broken = useAppSelector(selectBroken);
  const dispatch = useAppDispatch();
  const toggleState = useAppSelector(selectToggle);
  const handleToggle = () => {
    dispatch(sendToggle(!toggleState));
  };
  const [logOutOpen, setLogOutOpen] = useState<boolean>(false);
  const [sendLogout] = useSendLogoutMutation();
  const navigate = useNavigate();

  // const ref = useRef(null);

  // const handleClickOutside = () => {

  //   setLogOutOpen(false);
  // };

  const handleClickInside = () => {
    setLogOutOpen((prev) => !prev);
  };

  const handleLogOut = () => {
    logOut();
    setLogOutOpen(false);
    sendLogout();
    navigate("/", { replace: true });
  };

  // useOnClickOutside(ref, handleClickOutside);
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

      <div style={{ position: "relative" }}>
        <AvatarWrapper onClick={handleClickInside}>
          <BellWrapper>
            <Bell />
          </BellWrapper>
          <UserAvatar
            email="sprout@langara.ca"
            size="56"
            round="16px"
            imageUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          />
        </AvatarWrapper>
        {logOutOpen && (
          <LogOutContainer onClick={handleLogOut}>
            <Typography variant="small" weight="500">
              Logout
            </Typography>
          </LogOutContainer>
        )}
      </div>
    </Container>
  );
};

export default React.memo(NavigationHeader);
