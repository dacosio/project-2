import { InputHTMLAttributes } from "react";

export interface FormikNumberFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  name: string;
}
