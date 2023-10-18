import React, { useState } from 'react';
import { SigninProps } from './Signin.props';
import { 
  Container,
  Header,
  SingupDetails,
  SingupForm,
  SubmitButton,
 } from './Signin.style';
import Typography from '../Typography';
import TextField from '../TextField';

const Signin = (props: SigninProps): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");

  return (
    <Container>
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
    </Container>
  );
};

export default React.memo(Signin);
