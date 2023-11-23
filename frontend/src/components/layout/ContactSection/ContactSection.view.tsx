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
import { Col, Row } from "react-grid-system";
import HomeFooter from "../HomeFooter";

const ContactSection = (props: ContactSectionProps): JSX.Element => {
  const form = useRef<HTMLFormElement>(null);
  const emailServiceID = process.env.REACT_APP_EMAIL_SERVICEID as string
  const templateID = process.env.REACT_APP_EMAIL_TEMPID as string
  const pubKey = process.env.REACT_APP_EMAIL_PUBKEY as string

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          emailServiceID,
          templateID,
          form.current,
          pubKey
        )
        .then(() => {
          toast.success("Message sent");
        })
        .catch(() => {
          toast.error("Unable to send your email");
        });
    }
  };

  const handleOnSubtmit = (values: {
    name: string;
    email: string;
    message: string;
  }) => {
    console.log(values);
  };

  return (
    <div id="contact">
      <Container>
        <Row align="center" style={{ margin: "0" }}>
          <Hide md sm xs>
            <ContactImage
              xxl={6}
              xl={6}
              lg={6}
              style={{
                paddingLeft: "0",
              }}>
              <img src={contact} alt="" />
            </ContactImage>
          </Hide>
          <Col xxl={5} xl={5} lg={5} md={12}>
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              onSubmit={handleOnSubtmit}
              enableReinitialize>
              <Form
                ref={form}
                onSubmit={sendEmail}
                style={{ display: "grid", gap: "32px" }}>
                <UserInfo>
                  <FormikTextField
                    label="Name"
                    labelVariant="subtitle"
                    labelWeight="bold"
                    name="name"
                    placeholder="Type your name here..."
                    style={{ flexGrow: "1" }}
                  />
                  <FormikTextField
                    label="Email"
                    labelVariant="subtitle"
                    labelWeight="bold"
                    name="email"
                    placeholder="Type your email here..."
                    style={{ flexGrow: "1" }}
                  />
                </UserInfo>
                <FormikTextArea
                  label="Your Message"
                  labelVariant="subtitle"
                  labelWeight="bold"
                  name="message"
                  placeholder="Type your message here..."
                  style={{ width: "100%" }}
                />
                <Button type="submit" text="Submit" variant="tonal" />
              </Form>
            </Formik>
          </Col>
          <Toaster />
        </Row>
        <HomeFooter></HomeFooter>
      </Container>
    </div>
  );
};

export default React.memo(ContactSection);
