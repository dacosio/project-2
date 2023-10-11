import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FormikTextArea from "../../../src/components/base/FormikTextAreaField";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { Form, Formik } from "formik";
import Button from "../../../src/components/base/Button";
import { object, string } from "yup";

const meta: Meta<typeof FormikTextArea> = {
  title: "Base/FormikTextAreaField",
  component: () => {
    const validationSchema = object({
      comment: string().required("Comment is required."),
    });

    const handleOnSubtmit = (values: { comment: string }) => {
      console.log(values);
    };

    return (
      <Container>
        <Formik
          initialValues={{ comment: "" }}
          validationSchema={validationSchema}
          onSubmit={handleOnSubtmit}
        >
          <Form style={{ display: "grid", gap: "32px" }}>
            <FormikTextArea
              label="Comment"
              name="comment"
              placeholder="comment"
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
