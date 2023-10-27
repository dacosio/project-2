import React, { useState } from "react";
import { SignupFormProps } from "./SignupForm.props";
import { Container, FormStyle } from "./SignupForm.style";
import TextField from "../TextField";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikTextField from "../FormikTextField";

const SignupForm = (props: SignupFormProps): JSX.Element => {
  const handleOnSubtmit = (values: { email: string }) => {
    console.log("Values: ", values);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Your email is required"),
    password: Yup.string().required("Your password is required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleOnSubtmit}>
      <Form>
        <FormStyle>
          <FormikTextField
            label="Email"
            name="email"
            placeholder="Enter email"
          />
          <FormikTextField
            label="Password"
            name="password"
            placeholder="******"
            secured
          />
          <FormikTextField
            label="Confirm Password"
            name="password"
            placeholder="******"
            secured
          />
        </FormStyle>
      </Form>
    </Formik>
  );
};

export default React.memo(SignupForm);
