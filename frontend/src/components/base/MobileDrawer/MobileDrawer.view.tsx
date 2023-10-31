import React, { useState } from "react";
import "react-modern-drawer/dist/index.css";
import { MobileDrawerProps, TouchEventHandler } from "./MobileDrawer.props";
import {
  Container,
  DrawerContainer,
  Header,
  InnerDrawer,
  Body,
} from "./MobileDrawer.style";
import DrawerHandle from "./../SVG/DrawerHandle";

const MobileDrawer = (props: MobileDrawerProps): JSX.Element => {
  const { isOpenDrawer, direction, children, handleDrawerClose, drawerSize } =
    props;
  const [startY, setStartY] = useState<number | null>(null);

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
    if (startY && e.touches[0].clientY - startY > 100) {
      handleDrawerClose();
    }
  };

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = () => {
    setStartY(null);
  };

  return (
    <Container>
      <DrawerContainer
        open={isOpenDrawer}
        onClose={handleDrawerClose}
        direction={direction}
        lockBackgroundScroll={true}
        size="auto"
      >
        <InnerDrawer
          onTouchStart={(event: React.TouchEvent<HTMLDivElement>) =>
            handleTouchStart(event)
          }
          onTouchMove={(event: React.TouchEvent<HTMLDivElement>) =>
            handleTouchMove(event)
          }
          onTouchEnd={(event: React.TouchEvent<HTMLDivElement>) =>
            handleTouchEnd(event)
          }
        >
          <Header>
            <DrawerHandle />
          </Header>
          <Body>{children}</Body>
        </InnerDrawer>
      </DrawerContainer>
    </Container>
  );
};

export default React.memo(MobileDrawer);
