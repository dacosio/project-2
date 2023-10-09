import { InputHTMLAttributes } from "react";

export interface FormikTextFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  secured?: boolean;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  alert?: string;
  prefix?: string;
  name: string;
}
