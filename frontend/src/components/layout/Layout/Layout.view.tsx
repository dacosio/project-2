import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutProps } from "./Layout.props";
import { Container, Main, Side } from "./Layout.style";
import Navigation from "../Navigation";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  selectBroken,
  selectToggle,
  sendToggle,
} from "features/sidebar/sidebarSlice";

const Layout = (props: LayoutProps): JSX.Element => {
  const broken = useAppSelector(selectBroken);
  const dispatch = useAppDispatch();
  const toggleState = useAppSelector(selectToggle);
  const handleToggle = () => {
    dispatch(sendToggle(!toggleState));
  };

  return (
    <Container>
      <Side>
        <Navigation />
      </Side>
      <Main>
        {broken && <button onClick={handleToggle}>Toggle</button>}
        <Outlet />
      </Main>
    </Container>
  );
};

export default Layout;
