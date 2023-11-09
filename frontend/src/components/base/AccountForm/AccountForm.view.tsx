import React, { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { AccountFormProps } from "./AccountForm.props";
import { ButtonContainer, Container, FormContainer } from "./AccountForm.style";
import FormikTextField from "../FormikTextField";
import SingleImageInput from "../SingleImageInput";
import { ImageType } from "react-images-uploading";
import Button from "../Button";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useRegisterMutation } from "../../../features/auth/authApiSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectEmail,
  selectFirstName,
  selectLastName,
  selectPassword,
  storeFirstName,
  storeLastName,
} from "../../../features/authModal/authModalSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";

const AccountForm = (props: AccountFormProps): JSX.Element => {
  const { onBack } = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [register] = useRegisterMutation();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const email = useAppSelector(selectEmail);
  const password = useAppSelector(selectPassword);
  const [image, setImage] = useState<ImageType | undefined>(undefined);
  const firstName = useAppSelector(selectFirstName);
  const lastName = useAppSelector(selectLastName);

  const handleSubmit = async (values: {
    firstName: string;
    lastName: string;
  }) => {
    setIsLoading(true);

    const formData = new FormData();
    if (image && image.file) {
      formData.append("file", image.file);
    }
    formData.append("email", email);
    formData.append("password", password);
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);

    await register(formData)
      .unwrap()
      .then((response) => {
        setIsLoading(false);
        toast.success("Signup success");
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.data.message);
      });
  };

  const handleChange = (event: ChangeEvent<HTMLFormElement>) => {
    if (event.target.name === "firstName") {
      dispatch(storeFirstName(event.target.value));
    } else if (event.target.name === "lastName") {
      dispatch(storeLastName(event.target.value));
    }
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Your first name is required"),
    lastName: Yup.string().required("Your last name is required"),
  });

  return (
    <>
      {isLoading && <Loading />}
      <Formik
        initialValues={{
          firstName: firstName ? firstName : "",
          lastName: lastName ? lastName : "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form onChange={handleChange}>
          <FormContainer>
            <SingleImageInput
              image={image}
              sizing="mobile"
              setImage={setImage}
              style={{ width: "150px" }}
            />
            <FormikTextField
              label="First Name"
              name="firstName"
              placeholder="Lumpia"
              style={{ width: "100%" }}
            />
            <FormikTextField
              label="Last Name"
              name="lastName"
              placeholder="Shanghai"
              style={{ width: "100%" }}
            />
            <ButtonContainer>
              {isLoading ? (
                <>
                  <Button
                    text="Back"
                    variant="disabled"
                    style={{ flexGrow: "1" }}
                  />
                  <Button text="Sign Up" variant="disabled" />
                </>
              ) : (
                <>
                  <Button
                    text="Back"
                    variant="outline"
                    onClick={onBack}
                    style={{ flexGrow: "1" }}
                  />
                  <Button type="submit" text="Sign Up" />
                </>
              )}
            </ButtonContainer>
          </FormContainer>
        </Form>
      </Formik>
    </>
  );
};

export default React.memo(AccountForm);
