import React, { MouseEvent, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FormikTextField from "../../../src/components/base/FormikTextField";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { Form, Formik } from "formik";
import Button from "../../../src/components/base/Button";
import { object, string } from "yup";
import Typography from "../../../src/components/base/Typography";
import { Info } from "../../../src/components/base/SVG";

const meta: Meta<typeof FormikTextField> = {
  title: "Base/FormikTextField",
  component: () => {
    const [visibility, setVisibility] = useState<boolean>(false);

    const handleOnToggle = (event: MouseEvent<HTMLDivElement>) => {
      setVisibility((oldValue) => !oldValue);
    };

    const instruction = (
      <div
        style={{
          position: "relative",
        }}
      >
        <div
          onClick={handleOnToggle}
          style={{
            display: "grid",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Info fill="#565A6A" />
        </div>
        {visibility && (
          <>
            <div
              style={{
                position: "absolute",
                borderRadius: "8px",
                padding: "12px",
                backgroundColor: "#FCFFEB",
                minWidth: "280px",
                top: "0",
                left: "50%",
                transform: "translateX(-25%) translateY(-105%)",
              }}
            >
              <Typography variant="small">Your password must</Typography>
              <ul style={{ marginBottom: "0" }}>
                <li>
                  <Typography variant="small">
                    have at least 10 characters
                  </Typography>
                </li>
                <li>
                  <Typography variant="small">
                    have at least one symbol
                  </Typography>
                </li>
                <li>
                  <Typography variant="small">
                    be a mix of uppercase and lowercase letters
                  </Typography>
                </li>
                <li>
                  <Typography variant="small">have no spaces</Typography>
                </li>
              </ul>
            </div>
            <div
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                zIndex: "-1",
                borderLeft: "20px solid transparent",
                borderRight: "20px solid transparent",
                borderTop: "30px solid #FCFFEB",
                transform: "translateX(-25%) translateY(-100%)",
              }}
            ></div>
          </>
        )}
      </div>
    );

    const validationSchema = object({
      email: string()
        .email("Invalid email format.")
        .required("Email is required."),
      password: string().required("Password is required."),
    });

    const handleOnSubtmit = (values: { email: string }) => {
      console.log(values);
    };

    return (
      <Container>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleOnSubtmit}
        >
          <Form style={{ display: "grid", gap: "32px" }}>
            <FormikTextField
              label="Email"
              name="email"
              placeholder="user@nomail.com"
            />
            <FormikTextField
              rightComponent={instruction}
              label="Password"
              name="password"
              placeholder="******"
              secured
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
