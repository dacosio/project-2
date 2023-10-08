import { InputHTMLAttributes } from "react";

export interface FormikTextFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  secured?: boolean;
  name: string;
  validate: (value: string) => string | undefined;
}
