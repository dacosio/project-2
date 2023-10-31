import React from "react";
import { FormikNumberFieldProps } from "./FormikNumberField.props";
import { Container } from "./FormikNumberField.style";
import NumberField from "../NumberField";
import { useField } from "formik";

const FormikNumberField = (props: FormikNumberFieldProps): JSX.Element => {
  const [field, meta] = useField(props);

  return (
    <NumberField {...field} {...props} error={meta.touched ? meta.error : ""} />
  );
};

export default React.memo(FormikNumberField);
