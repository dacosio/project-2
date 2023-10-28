import React from "react";
import toast, { Toaster } from "react-hot-toast";
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
import { useLoginMutation } from "../../../features/auth/authApiSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { setCredentials } from "../../../features/auth/authSlice";

const Signin = (props: SigninProps): JSX.Element => {
  const [login] = useLoginMutation();
  const [isModalOpen, setModalState] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const toggleModal = () => setModalState(!isModalOpen);

  const handleOnSubmit = async (v: { email: string; password: string }) => {
    const { email, password } = v;
    try {
      const { accessToken } = await login({ email, password }).unwrap();
      dispatch(setCredentials({ accessToken }));

      navigate("/dashboard");
    } catch (err: any) {
      console.log(err.data?.message);
    }
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
          onSubmit={handleOnSubmit}
          enableReinitialize
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
