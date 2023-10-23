import React from "react";
import { FormikDropDownProps } from "./FormikDropDown.props";
import { Container } from "./FormikDropDown.style";
import { useField } from "formik";
import DropDown from "../DropDown";

const FormikDropDown = (props: FormikDropDownProps): JSX.Element => {
  const [field, meta] = useField(props);

  return (
    <DropDown
      {...field}
      {...props}
      error={meta.touched ? meta.error : ""}
    ></DropDown>
  );
};

export default React.memo(FormikDropDown);
