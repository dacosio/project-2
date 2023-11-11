import { InputHTMLAttributes } from "react";
import { Variants } from "../Typography/Typography.props";

export interface FormikTextFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  secured?: boolean;
  LeftComponent?: React.ReactNode;
  alert?: string;
  prefix?: string;
  name: string;
  labelVariant?: Variants;
  labelWeight?: string;
}
