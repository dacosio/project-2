import { InputHTMLAttributes } from "react";

export interface FormikTextFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  secured?: boolean;
  LeftComponent?: React.ReactNode;
  alert?: string;
  prefix?: string;
  name: string;
  validate: (value: string) => string | undefined;
}
