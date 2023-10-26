import React from "react";
import { ContactSectionProps } from "./ContactSection.props";
import { Container } from "./ContactSection.style";
import { Form, Formik } from "formik";

import Button from "../../base/Button";
import FormikTextArea from "../../base/FormikTextAreaField";
import FormikTextField from "../../base/FormikTextField";
import { string } from "yup";
import { Col, Row, Visible, Hidden } from "react-grid-system";
import * as Yup from "yup";



const ContactSection = (props: ContactSectionProps): JSX.Element => {
  const handleOnSubtmit = (values: { email: string }) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Your name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Your email is required"),
    comment: string().required("message is required."),
  });

  return (
    <Container>
      <Row style={{ margin: "0" }}>
        <Col>
          <Formik
            initialValues={{ name: "", email: "", comment: "" }}
            validationSchema={validationSchema}
            onSubmit={handleOnSubtmit}
          >
            <Form style={{ display: "grid", gap: "32px" }}>
              <FormikTextField
                label="Name"
                name="name"
                placeholder="Juan Dela Cruz"
              />
              <FormikTextField
                label="Email"
                name="email"
                placeholder="user@nomail.com"
              />
              <FormikTextArea
                label="Your Message"
                name="comment"
                placeholder="comment"
              />
              <Button type="submit" text="Submit" variant="primary" />
            </Form>
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(ContactSection);
