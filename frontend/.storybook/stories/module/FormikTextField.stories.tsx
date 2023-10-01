import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FormikTextField from "../../../src/components/module/FormikTextField";
import Container from "../../components/Container";

import { Form, Formik } from "formik";

import Button from "../../../src/components/base/Button";

// eslint-disable-next-line react/prop-types
const Component = () => {
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <FormikTextField type="email" label="EMAIL" name="email" />
        <Button size="sm" type="submit" text="Submit" />
      </Form>
    </Formik>
  );
};

const meta: Meta<typeof FormikTextField> = {
  title: "Module/FormikTextField",
  component: () => {
    return (
      <Container background="white">
        <Component />
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FormikText: Story = {};
