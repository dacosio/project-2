import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FormikNumberField from "../../../src/components/base/FormikNumberField";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { Form, Formik } from "formik";
import Button from "../../../src/components/base/Button";
import { number, object } from "yup";

const meta: Meta<typeof FormikNumberField> = {
  title: "Base/FormikNumberField",
  component: () => {
    const validationSchema = object({
      quantity: number()
        .typeError("This field should be a number.")
        .required("Quantity is required."),
    });

    const handleOnSubtmit = (values: { quantity: number }) => {
      console.log(values);
    };

    return (
      <Container>
        <Formik
          initialValues={{ quantity: 0 }}
          validationSchema={validationSchema}
          onSubmit={handleOnSubtmit}
        >
          <Form style={{ display: "grid", gap: "32px" }}>
            <FormikNumberField
              label="Quantity"
              name="quantity"
              placeholder="quantity"
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
