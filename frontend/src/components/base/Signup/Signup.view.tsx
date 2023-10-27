import React from "react";
import { SignupProps } from "./Signup.props";
import {
  Container,
  Header,
  SingupForm,
  ButtonDivs,
  SubmitButton,
  BackButton,
  Option,
  Bottom,
  SignUpButton,
} from "./Signup.style";
import Typography from "../Typography";
import { useMultistepForm } from "../../../utils/hooks/useMultistepForm";
import SignupForm from "../SignupForm";
import AccountForm from "../AccountForm";
import { useAppDispatch } from "app/hooks";
import { toggleSignIn, toggleSignUp } from "features/authModal/authModalSlice";

const Signup = (props: SignupProps): JSX.Element => {
  const { step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <SignupForm />,
    <AccountForm />,
  ]);

  const dispatch = useAppDispatch();
  const handleSignUpModal = () => {
    dispatch(toggleSignIn(true));
    dispatch(toggleSignUp(false));
  };

  return (
    <Container>
      <Header>
        <Typography
          variant="title2"
          weight="700"
          textColor="primary"
          align="center">
          Sign up for free and start farming!
        </Typography>
      </Header>

      <SingupForm action="">
        {step}
        <ButtonDivs>
          {!isFirstStep && (
            <BackButton type="button" onClick={back}>
              Back
            </BackButton>
          )}
          <SubmitButton type="button" onClick={next}>
            {isLastStep ? "Signup" : "Next"}
          </SubmitButton>
        </ButtonDivs>
        {isLastStep ? null : (
          <Option>
            <Bottom>
              <Typography variant="subtitle" align="center" textColor="n70">
                Already have an member?
              </Typography>
              <SignUpButton
                variant="subtitle"
                textColor="n90"
                onClick={handleSignUpModal}>
                Sign In
              </SignUpButton>
            </Bottom>
          </Option>
        )}
      </SingupForm>

      {/* <Header>
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
              onChange={(e) => setPassword(e.target.value)}
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
        </SingupDetails> */}
    </Container>
  );
};

export default React.memo(Signup);
