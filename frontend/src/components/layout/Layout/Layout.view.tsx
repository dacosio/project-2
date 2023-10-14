import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutProps } from "./Layout.props";
import { Container, Main, Side } from "./Layout.style";
import Navigation from "../Navigation";
import NavigationHeader from "../NavigationHeader";

const Layout = (props: LayoutProps): JSX.Element => {
  return (
    <Container>
      <Side>
        <Navigation />
      </Side>
      <Main>
        <NavigationHeader />
        <Outlet />
      </Main>
    </Container>
  );
};

export default Layout;
