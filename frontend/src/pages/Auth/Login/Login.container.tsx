import React, { useState } from "react";
import LoginView from "./Login.view";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "features/auth/authApiSlice";
import { useAppDispatch } from "app/hooks";
import { setCredentials } from "features/auth/authSlice";
const Login = (): JSX.Element => {
  const roles = ["admin", "employee"];
  const isActive = true;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const handlePwdInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { accessToken } = await login({ email, password }).unwrap();
      dispatch(setCredentials({ accessToken }));
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const generatedProps = {
    // generated props here
    email,
    password,
    roles,
    isActive,
    handleUserInput,
    handlePwdInput,
    handleSubmit,
  };
  return <LoginView {...generatedProps} />;
};

export default Login;
