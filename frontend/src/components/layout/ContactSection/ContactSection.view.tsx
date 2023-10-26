import React from "react";
import { ContactSectionProps } from "./ContactSection.props";
import { Container } from "./ContactSection.style";
import { Form, Formik } from "formik";
import Button from "../../base/Button";
import FormikTextArea from "../../base/FormikTextAreaField";
import { object, string } from "yup";

const ContactSection = (props: ContactSectionProps): JSX.Element => {
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
};

export default React.memo(ContactSection);
