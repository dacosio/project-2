import React, { ChangeEvent } from "react";
import { SignupFormProps } from "./SignupForm.props";
import { Container, FormStyle } from "./SignupForm.style";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikTextField from "../FormikTextField";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectConfirmPassword,
  selectEmail,
  selectPassword,
  storeConfirmPassword,
  storeEmail,
  storePassword,
} from "../../../features/authModal/authModalSlice";

const SignupForm = (props: SignupFormProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleSubmit = (values: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => {};

  const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
    if (event.target.name === "email") {
      dispatch(storeEmail(event.target.value));
    } else if (event.target.name === "password") {
      dispatch(storePassword(event.target.value));
    } else if (event.target.name === "confirmPassword") {
      dispatch(storeConfirmPassword(event.target.value));
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Your email is required"),
    password: Yup.string().required("Your password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Your password does not match")
      .required("Your confirm password is required"),
  });

  const email = useAppSelector(selectEmail);
  const password = useAppSelector(selectPassword);
  const confirmPassword = useAppSelector(selectConfirmPassword);

  return (
    <Formik
      initialValues={{
        email: email ? email : "",
        password: password ? password : "",
        confirmPassword: confirmPassword ? confirmPassword : "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form onChange={handleChange}>
        <FormStyle>
          <FormikTextField
            label="Email"
            labelVariant="small"
            labelWeight="400"
            name="email"
            placeholder="Enter email"
          />
          <FormikTextField
            label="Password"
            labelVariant="small"
            labelWeight="400"
            name="password"
            placeholder="******"
            secured
          />
          <FormikTextField
            label="Confirm Password"
            labelVariant="small"
            labelWeight="400"
            name="confirmPassword"
            placeholder="******"
            secured
          />
        </FormStyle>
      </Form>
    </Formik>
  );
};

export default React.memo(SignupForm);
