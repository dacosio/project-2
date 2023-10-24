import React from "react";
import { SigninProps } from "./Signin.props";
import {
  Container,
  Header,
  SigninForm,
  FormStyle,
  Option,
} from "./Signin.style";
import Typography from "../Typography";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikTextField from "../FormikTextField";
import Button from "../Button";
import Modal from "../Modal";

const Signin = (props: SigninProps): JSX.Element => {
  const [isModalOpen, setModalState] = React.useState(false);

  const toggleModal = () => setModalState(!isModalOpen);

  const handleOnSubtmit = (values: { email: string }) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Your email is required"),
    password: Yup.string().required("Your password is required"),
  });

  return (
    <Container>
      <Header>
        <Typography
          variant="title2"
          weight="700"
          textColor="primary"
          align="center"
        >
          Sign up for free and start farming!
        </Typography>
      </Header>

      <SigninForm>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleOnSubtmit}
        >
          <Form>
            <FormStyle>
              <FormikTextField
                label="Email"
                name="email"
                placeholder="user@nomail.com"
              />
              <FormikTextField
                label="Password"
                name="password"
                placeholder="******"
                secured
              />
              <Button type="submit" text="Submit" variant="primary" />
            </FormStyle>
          </Form>
        </Formik>
        <Option>
          <Typography variant="mobile" align="center" textColor="n70">
            <a href="">Forgot Password?</a>
          </Typography>
          <Typography variant="small" align="center" textColor="n70">
            Don't have an{" "}
            <a href="" onClick={toggleModal}>
              Account
            </a>
            ?
            <Modal
              title={"This is my modal"}
              isOpen={isModalOpen}
              onClose={toggleModal}
            >
              <Signin />
            </Modal>
          </Typography>
        </Option>
      </SigninForm>
    </Container>
  );
};

export default React.memo(Signin);
