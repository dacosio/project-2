import React, { useState } from "react";
import { SignupProps } from "./Signup.props";
import {
  Container,
  Header,
  SingupForm,
  ButtonDivs,
  Option,
  Bottom,
  SignUpButton,
} from "./Signup.style";
import Typography from "../Typography";
import { useMultistepForm } from "../../../utils/hooks/useMultistepForm";
import SignupForm from "../SignupForm";
import AccountForm from "../AccountForm";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectConfirmPassword,
  selectEmail,
  selectPassword,
  toggleSignIn,
  toggleSignUp,
} from "../../../features/authModal/authModalSlice";
import * as Yup from "yup";
import Button from "../Button";

const Signup = (props: SignupProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const [isValid, setIsValid] = useState<boolean>(false);

  const handleBack = () => {
    back();
  };

  const handleSignUpModal = () => {
    dispatch(toggleSignIn(true));
    dispatch(toggleSignUp(false));
  };

  const { step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <SignupForm />,
    <AccountForm onBack={handleBack} />,
  ]);

  const email = useAppSelector(selectEmail);
  const password = useAppSelector(selectPassword);
  const confirmPassword = useAppSelector(selectConfirmPassword);

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""])
      .required(),
  });

  schema
    .validate({
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    })
    .then((response) => {
      setIsValid(true);
    })
    .catch((error) => {
      setIsValid(false);
    });

  return (
    <Container>
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

      <SingupForm>
        {step}
        <ButtonDivs>
          {isFirstStep &&
            (isValid ? (
              <Button
                type="button"
                text="Next"
                onClick={next}
                style={{ width: "100%" }}
              />
            ) : (
              <Button
                type="button"
                variant="disabled"
                text="Next"
                style={{ width: "100%" }}
              />
            ))}
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
                onClick={handleSignUpModal}
              >
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
