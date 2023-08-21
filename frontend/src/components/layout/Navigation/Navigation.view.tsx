import React from "react";
import { NavigationProps } from "./Navigation.props";
import { Container, LogOUtBtn, LoginBtn } from "./Navigation.style";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSendLogoutMutation } from "features/auth/authApiSlice";

const Navigation = (props: NavigationProps): JSX.Element => {
  const navigate = useNavigate();
  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/private">Private</Link>
      <LoginBtn onClick={() => navigate("/login")}>Login</LoginBtn>
      <LogOUtBtn onClick={() => sendLogout()}>Logout</LogOUtBtn>
    </Container>
  );
};

export default Navigation;
