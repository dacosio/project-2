import React, { useState, useEffect } from "react";
import { NavigationProps } from "./Navigation.props";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSendLogoutMutation } from "features/auth/authApiSlice";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  MenuItemStyles,
} from "react-pro-sidebar";
import Typography from "components/base/Typography";
import SidebarHeader from "../SidebarHeader";
import Button from "components/base/Button";
import {
  CropGuideSvg,
  DashboardSvg,
  Smile,
  YourCropsSvg,
} from "components/base/SVG";
// import theme from "utils/Theme";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  selectCollapse,
  selectToggle,
  sendBroken,
  sendCollapse,
  sendToggle,
} from "features/sidebar/sidebarSlice";
import {
  SideBarContainer,
  SideBarMenuTitle,
  SideBarWrapper,
} from "./Navigation.style";
import { useLocation } from "react-router-dom";
import { useTheme } from "@emotion/react";

const Navigation = (props: NavigationProps): JSX.Element => {
  const theme = useTheme();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const collapseState = useAppSelector(selectCollapse);
  const toggleState = useAppSelector(selectToggle);

  const [broken, setBroken] = useState<boolean>(false);

  useEffect(() => {
    dispatch(sendBroken(broken));
  }, [broken, dispatch]);

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: "16px",
    },
    icon: {
      margin: "0px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    button: ({ active }) => {
      return {
        backgroundColor: active ? theme.btn.color.primary : "transparent",
        color: active ? theme.btn.text.white : theme.btn.text.secondary,
        margin: collapseState === true ? "0px 10px" : "0 26px",
        justifyContent: "center",
        borderRadius: "16px",
        display: "flex",
        [`&:hover`]: {
          backgroundColor: active
            ? theme.btn.color.hover
            : theme.btn.color.lightest,
          color: active ? theme.btn.text.white : theme.btn.color.pressed,
        },
      };
    },
  };

  const textColor = (path: string) => {
    if (location.pathname === path) {
      return "white";
    } else {
      return "secondary";
    }
  };

  const activeState = (path: string) => {
    if (location.pathname === path) {
      return true;
    } else {
      return false;
    }
  };

  const iconColor = (path: string) => {
    if (location.pathname === path) {
      return theme.btn.text.white;
    } else {
      return theme.btn.text.secondary;
    }
  };

  return (
    <Sidebar
      collapsed={collapseState}
      toggled={toggleState}
      onBackdropClick={() => dispatch(sendToggle(false))}
      onBreakPoint={setBroken}
      breakPoint="lg"
      width="288px"
      rootStyles={{
        backgroundColor: theme.bg.primary,
      }}
    >
      <SideBarContainer>
        <SidebarHeader style={{ marginBottom: "24px", marginTop: "16px" }} />
        <SideBarWrapper>
          <SideBarMenuTitle>
            <Typography
              variant="small"
              weight="500"
              style={{
                opacity: collapseState ? 0 : 0.7,
              }}
            >
              DASHBOARD
            </Typography>
          </SideBarMenuTitle>
          <Menu menuItemStyles={menuItemStyles}>
            <MenuItem
              icon={
                <DashboardSvg
                  fill={textColor("/dashboard")}
                  stroke={iconColor("/dashboard")}
                />
              }
              component={<Link to="/dashboard" />}
              active={activeState("/dashboard")}
            >
              <Typography
                variant="body"
                weight="500"
                textColor={textColor("/dashboard")}
              >
                Overview
              </Typography>
            </MenuItem>
          </Menu>

          <SideBarMenuTitle style={{ marginTop: "16px" }}>
            <Typography
              variant="small"
              weight="500"
              style={{
                opacity: collapseState ? 0 : 0.7,
              }}
            >
              CROPS
            </Typography>
          </SideBarMenuTitle>
          <Menu menuItemStyles={menuItemStyles}>
            <MenuItem
              icon={
                <YourCropsSvg
                  fill={iconColor("/your-crops")}
                  stroke={iconColor("/your-crops")}
                />
              }
              component={<Link to="/your-crops" />}
              active={activeState("/your-crops")}
            >
              <Typography
                variant="body"
                weight="500"
                textColor={textColor("/your-crops")}
              >
                Your Crops
              </Typography>
            </MenuItem>
            <MenuItem
              icon={
                <CropGuideSvg
                  fill={iconColor("/crop-guide")}
                  stroke={iconColor("/crop-guide")}
                />
              }
              component={<Link to="/crop-guide" />}
              active={activeState("/crop-guide")}
            >
              <Typography
                variant="body"
                weight="500"
                textColor={textColor("/crop-guide")}
              >
                Crop Guide
              </Typography>
            </MenuItem>
          </Menu>
          <SideBarMenuTitle style={{ marginTop: "16px" }}>
            <Typography
              variant="small"
              weight="500"
              style={{
                opacity: collapseState ? 0 : 0.7,
              }}
            >
              WEATHER
            </Typography>
          </SideBarMenuTitle>
          <Menu menuItemStyles={menuItemStyles}>
            <MenuItem
              icon={
                <YourCropsSvg
                  fill={iconColor("/weather")}
                  stroke={iconColor("/weather")}
                />
              }
              component={<Link to="/weather" />}
              active={activeState("/weather")}
            >
              <Typography
                variant="body"
                weight="500"
                textColor={textColor("/weather")}
              >
                Weather **todo
              </Typography>
            </MenuItem>
          </Menu>
        </SideBarWrapper>
      </SideBarContainer>
    </Sidebar>
  );
};

export default Navigation;
