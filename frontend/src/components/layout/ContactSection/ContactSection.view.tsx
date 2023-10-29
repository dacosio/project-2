import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ContactSectionProps } from "./ContactSection.props";
import {
  Container,
  Hide,
  ContactImage,
  UserInfo,
} from "./ContactSection.style";

import contact from "./../../../images/contact.png";

import { Form, Formik } from "formik";
import emailjs from "@emailjs/browser";
import Button from "../../base/Button";
import FormikTextArea from "../../base/FormikTextAreaField";
import FormikTextField from "../../base/FormikTextField";
import { string } from "yup";
import { Col, Row, Visible, Hidden } from "react-grid-system";
import * as Yup from "yup";
import HomeFooter from "../HomeFooter";

const ContactSection = (props: ContactSectionProps): JSX.Element => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_buhpmve",
          "template_caubnyp",
          form.current,
          "XjkLA79uvMpAgWV9B"
        )
        .then(
          () => {
            toast.success("Message sent");
          },
          () => {
            toast.error("unable to send your email");
          }
        );
    }
  };

  const handleOnSubtmit = (values: {
    name: string;
    email: string;
    message: string; // Add this line
  }) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Your name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Your email is required"),
    message: string().required("message is required."),
  });

  return (
    <Container>
      <Row align="center" style={{ margin: "0" }}>
        <Hide md sm xs>
          <ContactImage
            xxl={6}
            xl={6}
            lg={6}
            style={{
              paddingLeft: "0",
            }}
          >
            <img src={contact} alt="" />
          </ContactImage>
        </Hide>
        <Col xxl={5} xl={5} lg={5} md={12}>
          {/* <form onSubmit={sendEmail} ref={form}>
              <label>Name</label>
              <input type="text" name="name" />
              <label>Email</label>
              <input type="email" name="email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form> */}
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleOnSubtmit}
            enableReinitialize
          >
            <Form
              ref={form}
              onSubmit={sendEmail}
              style={{ display: "grid", gap: "32px" }}
            >
              <UserInfo>
                <FormikTextField
                  label="Name"
                  name="name"
                  placeholder="Juan Dela Cruz"
                  style={{ flexGrow: "1" }}
                />
                <FormikTextField
                  label="Email"
                  name="email"
                  placeholder="user@nomail.com"
                  style={{ flexGrow: "1" }}
                />
              </UserInfo>
              <FormikTextArea
                label="Your Message"
                name="message"
                placeholder="message"
              />
              <Button type="submit" text="Submit" variant="tonal" />
            </Form>
          </Formik>
        </Col>
        <Toaster />
      </Row>
    <HomeFooter></HomeFooter>
    </Container>
    
  );
};

export default React.memo(ContactSection);
