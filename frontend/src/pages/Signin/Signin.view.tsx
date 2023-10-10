import React, { useState } from "react";
import { SigninGeneratedProps } from "./Signin.props";
import {
  Container,
  Modalbox,
  Header,
  SingupDetails,
  SingupForm,
  SubmitButton,
} from "./Signin.style";
import Typography from "components/base/Typography";
import TextField from "components/base/TextField";
import { Col, Row, Visible, Hidden } from "react-grid-system";

const SigninView = (props: SigninGeneratedProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Modalbox>
        <Header>
          <Typography
            variant="title2"
            weight="700"
            textColor="primary"
            align="center"
          >
            Welcome back, let’s farm!
          </Typography>
        </Header>
        <SingupDetails>
          <SingupForm>
            <TextField
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="user@nomail.com"
              style={{width: "100%"}}
            />
            <TextField
              label="Password"
              value={password}
              onChangeText={setPassword}
              secured
              placeholder="******"
              style={{width: "100%"}}
            />
            <SubmitButton type="button" value="submit" />
            <a href="">Forgot Password?</a>
          </SingupForm>
          <Typography
            variant="small"
            weight="400"
            textColor="n90"
            align="center"
          >
            Don’t have an account? <a href="">Sign Up</a>
          </Typography>
        </SingupDetails>
      </Modalbox>
    </Container>
  );
};

export default SigninView;
