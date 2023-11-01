import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FormikTextField from "../../../src/components/base/FormikTextField";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { Form, Formik } from "formik";
import Button from "../../../src/components/base/Button";
import * as Yup from "yup";

const meta: Meta<typeof FormikTextField> = {
  title: "Base/FormikTextField",
  component: () => {
    const handleOnSubtmit = (values: { email: string }) => {
      console.log(values);
    };

    const validationSchema = Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Your email is required"),
      password: Yup.string().required("Your password is required"),
    });

    return (
      <Container>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleOnSubtmit}
        >
          <Form>
            <FormikTextField
              label="Email"
              labelVariant="subtitle"
              labelWeight="400"
              name="email"
              placeholder="user@nomail.com"
            />
            <FormikTextField
              label="Password"
              labelVariant="subtitle"
              labelWeight="400"
              name="password"
              placeholder="******"
              secured
            />
            <Button type="submit" text="Submit" variant="primary" />
          </Form>
        </Formik>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
