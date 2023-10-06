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
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [sendLogout] = useSendLogoutMutation();
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
    button: ({ active }) => {
      return {
        backgroundColor: active ? theme.btn.color.primary : "transparent",
        color: active ? theme.btn.text.white : theme.btn.text.secondary,
        margin: "0 26px",
        justifyContent: "center",
        borderRadius: "16px",
        display: "flex",
      };
    },
  };

  const dashboardColor =
    location.pathname === "/dashboard" ? "white" : "secondary";
  const yourCropsColor =
    location.pathname === "/your-crops" ? "white" : "secondary";
  const cropGuideColor =
    location.pathname === "/crop-guide" ? "white" : "secondary";
  const weatherColor = location.pathname === "/weather" ? "white" : "secondary";

  const dashboardIconColor =
    location.pathname === "/dashboard"
      ? theme.btn.text.white
      : theme.btn.text.secondary;
  const yourCropsIconColor =
    location.pathname === "/your-crops"
      ? theme.btn.text.white
      : theme.btn.text.secondary;
  const cropGuideIconColor =
    location.pathname === "/crop-guide"
      ? theme.btn.text.white
      : theme.btn.text.secondary;
  const weatherIconColor =
    location.pathname === "/weather"
      ? theme.btn.text.white
      : theme.btn.text.secondary;

  const dashboardActive = location.pathname === "/dashboard" ? true : false;
  const yourCropsActive = location.pathname === "/your-crops" ? true : false;
  const cropGuideActive = location.pathname === "/crop-guide" ? true : false;
  const weatherActive = location.pathname === "/weather" ? true : false;
  return (
    <Sidebar
      collapsed={collapseState}
      toggled={toggleState}
      onBackdropClick={() => dispatch(sendToggle(false))}
      onBreakPoint={setBroken}
      breakPoint="md"
      width="288px"
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
                  fill={dashboardColor}
                  stroke={dashboardIconColor}
                />
              }
              component={<Link to="/dashboard" />}
              active={dashboardActive}
            >
              <Typography
                variant="body"
                weight="500"
                textColor={dashboardColor}
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
                  fill={yourCropsIconColor}
                  stroke={yourCropsIconColor}
                />
              }
              component={<Link to="/your-crops" />}
              active={yourCropsActive}
            >
              <Typography
                variant="body"
                weight="500"
                textColor={yourCropsColor}
              >
                Your Crops
              </Typography>
            </MenuItem>
            <MenuItem
              icon={
                <CropGuideSvg
                  fill={cropGuideIconColor}
                  stroke={cropGuideIconColor}
                />
              }
              component={<Link to="/crop-guide" />}
              active={cropGuideActive}
            >
              <Typography
                variant="body"
                weight="500"
                textColor={cropGuideColor}
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
                  fill={weatherIconColor}
                  stroke={weatherIconColor}
                />
              }
              component={<Link to="/weather" />}
              active={weatherActive}
            >
              <Typography variant="body" weight="500" textColor={weatherColor}>
                Weather **todo
              </Typography>
            </MenuItem>
          </Menu>
        </SideBarWrapper>
        {/* <Button
          onClick={() => {
            sendLogout();
            navigate("/", { replace: true }); 
          }}
          variant="outline"
          text="Logout"
          size="md"
        /> */}
      </SideBarContainer>
    </Sidebar>
  );
};

export default Navigation;
