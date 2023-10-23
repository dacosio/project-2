import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FormikDropDown from "../../../src/components/base/FormikDropDown";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import { Option } from "../../../src/components/base/FormikDropDown/FormikDropDown.props";
import Button from "../../../src/components/base/Button";

const meta: Meta<typeof FormikDropDown> = {
  title: "Base/FormikDropDown",
  component: () => {
    const options: Option[] = [
      { value: "value1", label: "label1" },
      { value: "value2", label: "label2" },
      { value: "value3", label: "label3" },
      { value: "value4", label: "label4" },
      { value: "value5", label: "label5" },
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
          initialValues={{ select1: "", select2: "value3" }}
          validationSchema={validationSchema}
          onSubmit={handleOnSubtmit}
        >
          <Form style={{ display: "grid", gap: "32px" }}>
            <FormikDropDown
              placeholder="Select1"
              name="select1"
              options={options}
            />
            <FormikDropDown
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
