import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FormikTextField from "../../../src/components/base/FormikTextField";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { Form, Formik } from "formik";
import Button from "../../../src/components/base/Button";
import { object, string } from "yup";

const meta: Meta<typeof FormikTextField> = {
  title: "Base/FormikTextField",
  component: () => {
    const validationSchema = object({
      email: string().required("Email is required."),
      password: string().required("Password is required."),
    });

    const handleOnSubtmit = (values: { email: string }) => {
      console.log(values);
    };

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
              name="email"
              placeholder="user@nomail.com"
            />
            <FormikTextField
              label="Password"
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
