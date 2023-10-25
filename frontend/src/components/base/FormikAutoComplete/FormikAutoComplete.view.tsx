import React from "react";
import { FormikAutoCompleteProps } from "./FormikAutoComplete.props";
import { Container } from "./FormikAutoComplete.style";
import { useField } from "formik";
import AutoComplete from "../AutoComplete";

const FormikAutoComplete = (props: FormikAutoCompleteProps): JSX.Element => {
  const [field, meta] = useField(props);

  return (
    <AutoComplete
      {...field}
      {...props}
      error={meta.touched ? meta.error : ""}
    />
  );
};

export default React.memo(FormikAutoComplete);
