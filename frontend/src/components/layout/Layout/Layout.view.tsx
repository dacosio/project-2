import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutProps } from "./Layout.props";
import { Container, Header, Wrapper } from "./Layout.style";
import Navigation from "../Navigation";
import Footer from "../Footer";

const Layout = (props: LayoutProps): JSX.Element => {
  const date: Date = new Date();
  const today = new Intl.DateTimeFormat("en-CA", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer today={today} />
    </Container>
  );
};

export default Layout;
