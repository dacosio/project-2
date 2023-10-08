import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FormikTextArea from "../../../src/components/base/FormikTextAreaField";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { Form, Formik } from "formik";
import Button from "../../../src/components/base/Button";

const meta: Meta<typeof FormikTextArea> = {
  title: "Base/FormikTextAreaField",
  component: () => {
    const commentValidator = (value: string) => {
      if (!value) {
        return "Comment is required.";
      } else {
        return "";
      }
    };

    const handleOnSubtmit = (values: { comment: string }) => {
      console.log(values);
    };

    return (
      <Container>
        <Formik initialValues={{ comment: "" }} onSubmit={handleOnSubtmit}>
          <Form>
            <FormikTextArea
              label="Comment"
              name="comment"
              placeholder="comment"
              validate={commentValidator}
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
