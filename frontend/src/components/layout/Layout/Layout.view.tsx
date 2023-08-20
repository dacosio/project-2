import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutProps } from "./Layout.props";
import { Container } from "./Layout.style";

const Layout = (props: LayoutProps): JSX.Element => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default React.memo(Layout);
