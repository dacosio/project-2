import React, { useRef } from "react";
import { ContactSectionProps } from "./ContactSection.props";
import { Container } from "./ContactSection.style";

import { Form, Formik } from "formik";
import emailjs from "@emailjs/browser";
import Button from "../../base/Button";
import FormikTextArea from "../../base/FormikTextAreaField";
import FormikTextField from "../../base/FormikTextField";
import { string } from "yup";
import { Col, Row, Visible, Hidden } from "react-grid-system";
import * as Yup from "yup";

const ContactSection = (props: ContactSectionProps): JSX.Element => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
            {/* <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form> */}
            <Form
              ref={form}
              onSubmit={sendEmail}
              style={{ display: "grid", gap: "32px" }}
            >
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
                name="message"
                placeholder="message"
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
