import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { SigninProps } from "./Signin.props";
import {
  Container,
  Header,
  SigninForm,
  FormStyle,
  Option,
  Bottom,
  SignUpButton,
} from "./Signin.style";
import Typography from "../Typography";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikTextField from "../FormikTextField";
import Button from "../Button";
import { useLoginMutation } from "../../../features/auth/authApiSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { setCredentials } from "../../../features/auth/authSlice";
import {
  toggleSignIn,
  toggleSignUp,
} from "../../../features/authModal/authModalSlice";

const Signin = (props: SigninProps): JSX.Element => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleOnSubmit = async (v: { email: string; password: string }) => {
    const { email, password } = v;
    try {
      const payload = await login({ email, password }).unwrap();
      dispatch(setCredentials(payload));

      navigate("/dashboard");
    } catch (err: any) {
      console.log(err);
      toast.error(err.data?.message);
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Your email is required"),
    password: Yup.string().required("Your password is required"),
  });

  const handleSignUpModal = () => {
    dispatch(toggleSignUp(true));
    dispatch(toggleSignIn(false));
  };

  return (
    <Container>
      <Header>
        <Typography
          variant="title2"
          weight="700"
          textColor="primary"
          align="center"
        >
          Welcome back, Let's farm!
        </Typography>
      </Header>

      <SigninForm>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleOnSubmit}
          enableReinitialize
        >
          <Form>
            <FormStyle>
              <FormikTextField
                label="Email"
                labelVariant="small"
                labelWeight="400"
                name="email"
                placeholder="user@nomail.com"
              />
              <FormikTextField
                label="Password"
                labelVariant="small"
                labelWeight="400"
                name="password"
                placeholder="******"
                secured
              />
              <Button type="submit" text="Submit" variant="primary" />
            </FormStyle>
          </Form>
        </Formik>
        <Option>
          <Typography variant="mobile" align="center" textColor="n70">
            <a href="">Forgot Password?</a>
          </Typography>
          <Bottom>
            <Typography variant="subtitle" align="center" textColor="n70">
              Don't have an Account ?
            </Typography>
            <SignUpButton
              variant="subtitle"
              textColor="n90"
              onClick={handleSignUpModal}
            >
              Sign Up
            </SignUpButton>
          </Bottom>
        </Option>
      </SigninForm>
      <Toaster />
    </Container>
  );
};

export default React.memo(Signin);
