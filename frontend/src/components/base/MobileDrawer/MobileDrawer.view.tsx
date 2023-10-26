import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { MobileDrawerProps } from "./MobileDrawer.props";
import { Container, Header, InnerDrawer, Body } from "./MobileDrawer.style";
import DrawerHandle from "./../SVG/DrawerHandle";

const MobileDrawer = (props: MobileDrawerProps): JSX.Element => {
  const { isOpenDrawer, direction, children, handleDrawerClose } = props;

  return (
    <Container>
      <Drawer
        open={isOpenDrawer}
        onClose={handleDrawerClose}
        direction={direction}
        className="mobile-drawer"
        lockBackgroundScroll={true}
        size="98%"
      >
        <InnerDrawer>
          <Header>
            <DrawerHandle />
          </Header>
          <Body>{children}</Body>
        </InnerDrawer>
      </Drawer>
    </Container>
  );
};

export default React.memo(MobileDrawer);
