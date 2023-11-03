import React from "react";
import { FormikTextAreaProps } from "./FormikTextAreaField.props";
import { Container } from "./FormikTextAreaField.style";
import { useField } from "formik";
import TextAreaField from "../TextAreaField";

const FormikTextArea = (props: FormikTextAreaProps): JSX.Element => {
  const { labelWeight, labelVariant } = props;
  const [field, meta] = useField(props);

  return (
    <TextAreaField
      {...field}
      {...props}
      error={meta.touched ? meta.error : ""}
      labelVariant={labelVariant}
      labelWeight={labelWeight}
    />
  );
};

export default React.memo(FormikTextArea);
