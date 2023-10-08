import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FormikTextField from "../../../src/components/base/FormikTextField";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { Form, Formik } from "formik";
import Button from "../../../src/components/base/Button";

const meta: Meta<typeof FormikTextField> = {
  title: "Base/FormikTextField",
  component: () => {
    const emailValidator = (value: string) => {
      if (!value) {
        return "Email is required.";
      } else {
        return "";
      }
    };

    const passwordValidator = (value: string) => {
      if (!value) {
        return "Password is required.";
      } else {
        return "";
      }
    };

    const handleOnSubtmit = (values: { email: string }) => {
      console.log(values);
    };

    return (
      <Container>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleOnSubtmit}
        >
          <Form>
            <FormikTextField
              label="Email"
              name="email"
              placeholder="user@nomail.com"
              validate={emailValidator}
            />
            <FormikTextField
              label="Password"
              name="password"
              placeholder="******"
              validate={passwordValidator}
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
