import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FormikAutoComplete from "../../../src/components/base/FormikAutoComplete";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { Form, Formik } from "formik";
import Button from "../../../src/components/base/Button";
import { object, string } from "yup";

const meta: Meta<typeof FormikAutoComplete> = {
  title: "Base/FormikAutoComplete",
  component: () => {
    const options: string[] = [
      "option1",
      "option2",
      "option3",
      "option4",
      "option5",
    ];

    const validationSchema = object({
      select1: string().required("Select1 is required."),
      select2: string().required("Select2 is required."),
    });

    const handleOnSubtmit = (values: { select1: string; select2: string }) => {
      console.log(values);
    };

    return (
      <Container>
        <Formik
          initialValues={{ select1: "", select2: "option3" }}
          validationSchema={validationSchema}
          onSubmit={handleOnSubtmit}
        >
          <Form style={{ display: "grid", gap: "32px" }}>
            <FormikAutoComplete
              placeholder="Select1"
              name="select1"
              options={options}
            />
            <FormikAutoComplete
              placeholder="Select2"
              name="select2"
              options={options}
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
