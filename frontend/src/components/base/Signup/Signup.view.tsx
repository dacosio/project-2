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
import { useAppDispatch } from "../../../app/hooks";
import {
  toggleSignIn,
  toggleSignUp,
} from "../../../features/authModal/authModalSlice";

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
              <Typography variant="mobile" align="center" textColor="n70">
                Already a member?
              </Typography>
              <SignUpButton
                variant="mobile"
                textColor="n90"
                onClick={handleSignUpModal}>
                Sign In
              </SignUpButton>
            </Bottom>
          </Option>
        )}
      </SingupForm>
    </Container>
  );
};

export default React.memo(Signup);
