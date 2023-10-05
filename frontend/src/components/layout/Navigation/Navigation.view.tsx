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
import { Smile } from "components/base/SVG";
import theme from "utils/Theme";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  selectCollapse,
  selectToggle,
  sendBroken,
  sendCollapse,
  sendToggle,
} from "features/sidebar/sidebarSlice";

const Navigation = (props: NavigationProps): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [sendLogout] = useSendLogoutMutation();
  const collapseState = useAppSelector(selectCollapse);
  const toggleState = useAppSelector(selectToggle);

  // useEffect(() => {
  //   if (isSuccess) navigate("/");
  // }, [isSuccess, navigate]);

  const [toggled, setToggled] = useState<boolean>(false);

  const [broken, setBroken] = useState<boolean>(false);

  useEffect(() => {
    dispatch(sendBroken(broken));
  }, [broken, dispatch]);

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: "13px",
    },
    SubMenuExpandIcon: {
      color: theme.brand.primary,
    },
    subMenuContent: {
      backgroundColor: "white",
    },
    button: {
      [`&.active`]: {
        backgroundColor: "#13395e",
        color: "#b6c8d9",
      },
      margin: "0 10px",
      justifyContent: "center",
    },
  };

  return (
    <Sidebar
      collapsed={collapseState}
      toggled={toggleState}
      onBackdropClick={() => dispatch(sendToggle(false))}
      onBreakPoint={setBroken}
      breakPoint="md"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <SidebarHeader style={{ marginBottom: "24px", marginTop: "16px" }} />
        <div style={{ flex: 1, marginBottom: "32px" }}>
          <div style={{ padding: "0 24px", marginBottom: "8px" }}>
            <Typography
              variant="title4"
              style={{
                opacity: collapseState ? 0 : 0.7,
                letterSpacing: "0.5px",
              }}
            >
              General
            </Typography>
          </div>
          <Menu menuItemStyles={menuItemStyles}>
            <SubMenu
              icon={<Smile width={25} height={25} />}
              label={<Typography variant="subtitle"">Pages</Typography>}
            >
              <MenuItem component={<Link to="/" />}>
                <Typography variant="subtitle">Home</Typography>
              </MenuItem>
              <MenuItem component={<Link to="/private" />}>
                <Typography variant="subtitle">Private</Typography>
              </MenuItem>
              <MenuItem component={<Link to="/login" />}>
                <Typography variant="subtitle">Login</Typography>
              </MenuItem>
            </SubMenu>
          </Menu>
        </div>
        <Button
          onClick={() => {
            sendLogout();
            navigate("/", { replace: true });
          }}
          variant="outline"
          text="Logout"
          size="md"
        />
      </div>
    </Sidebar>
  );
};

export default Navigation;
