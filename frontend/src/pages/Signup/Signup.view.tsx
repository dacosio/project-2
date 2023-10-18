import React, { useState } from "react";
import { SignupGeneratedProps } from "./Signup.props";
import {
  Container,
  DivStyling,
  Header,
  SingupDetails,
  SingupForm,
  SubmitButton,
} from "./Signup.style";
import Typography from "components/base/Typography";
import TextField from "components/base/TextField";
import { Col, Row, Visible, Hidden } from "react-grid-system";

const SignupView = (props: SignupGeneratedProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");

  return (
    <Container>
        <DivStyling>
          <Header>
            <Typography
              variant="title2"
              weight="700"
              textColor="primary"
              align="center"
            >
              Sign up for free and start farming!
            </Typography>
          </Header>
          <SingupDetails>
            <SingupForm>
              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="user@nomail.com"
                style={{ width: "100%" }}
              />
              <TextField
                label="Password"
                value={password}
                onChange={(e) => setEmail(e.target.value)}
                secured
                placeholder="******"
                style={{ width: "100%" }}
              />
              <SubmitButton type="button" value="submit" />
            </SingupForm>
            <Typography
              variant="small"
              weight="400"
              textColor="n90"
              align="center"
            >
              Already a member? <a href="">Log In</a>
            </Typography>
          </SingupDetails>
        </DivStyling>
    </Container>
  );
};

export default SignupView;
