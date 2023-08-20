import React from "react";
import LoginView from "./Login.view";
const Login = (): JSX.Element => {
  const email = "email";
  const password = "password";
  const roles = ["admin", "employee"];
  const isActive = true;

  const generatedProps = {
    // generated props here
    email,
    password,
    roles,
    isActive,
  };
  return <LoginView {...generatedProps} />;
};

export default Login;
