import React, { useEffect, FocusEvent } from "react";
import { FormikTextFieldProps } from "./FormikTextField.props";
import { Container } from "./FormikTextField.style";
import TextField from "../TextField";
import { useField } from "formik";

const FormikTextField = (props: FormikTextFieldProps): JSX.Element => {
  const [field, meta] = useField(props);

  return (
    <TextField {...field} {...props} error={meta.touched ? meta.error : ""} />
  );
};

export default React.memo(FormikTextField);
