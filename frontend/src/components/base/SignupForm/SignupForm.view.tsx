import React, { useState } from "react";
import { SignupFormProps } from "./SignupForm.props";
import { Container, Form } from "./SignupForm.style";
import TextField from "../TextField";

const SignupForm = (props: SignupFormProps): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");

  return (
    <Form>
      <TextField
        label="Email"
        value={email}
        setValue={setEmail}
        placeholder="user@nomail.com"
        style={{ width: "100%" }}
      />
      <TextField
        label="Password"
        value={password}
        setValue={setPassword}
        secured
        placeholder="******"
        style={{ width: "100%" }}
      />
      <TextField
        label="Confirm Password"
        value={password}
        setValue={setPassword}
        secured
        placeholder="******"
        style={{ width: "100%" }}
      />
    </Form>
  );
};

export default React.memo(SignupForm);
