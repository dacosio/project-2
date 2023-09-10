import React, { useState } from "react";
import { NavigationProps } from "./Navigation.props";
import { Container, LogOUtBtn, LoginBtn } from "./Navigation.style";
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

const Navigation = (props: NavigationProps): JSX.Element => {
  const navigate = useNavigate();
  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  // useEffect(() => {
  //   if (isSuccess) navigate("/");
  // }, [isSuccess, navigate]);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [toggled, setToggled] = useState<boolean>(false);
  const [broken, setBroken] = useState<boolean>(false);
  const [rtl, setRtl] = useState<boolean>(false);
  const [hasImage, setHasImage] = useState<boolean>(false);

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
      padding: "0 25px",
    },

    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    button: {
      [`&.active`]: {
        backgroundColor: "#13395e",
        color: "#b6c8d9",
      },
    },
  };

  return (
    <Container>
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        onBreakPoint={setBroken}
        breakPoint="md"
        width="300px"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            border: "1px solid red",
          }}
        >
          <SidebarHeader style={{ marginBottom: "24px", marginTop: "16px" }} />
          <div style={{ flex: 1, marginBottom: "32px" }}>
            <div style={{ padding: "0 24px", marginBottom: "8px" }}>
              <Typography variant="overline">General</Typography>
            </div>
            <Menu menuItemStyles={menuItemStyles}>
              <SubMenu label={<Typography variant="label">Pages</Typography>}>
                <MenuItem component={<Link to="/" />}>
                  <Typography variant="caption">Home</Typography>
                </MenuItem>
                <MenuItem component={<Link to="/private" />}>
                  <Typography variant="caption">Private</Typography>
                </MenuItem>
                <MenuItem component={<Link to="/login" />}>
                  <Typography variant="caption">Login</Typography>
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
    </Container>
  );
};

export default Navigation;
