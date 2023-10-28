import { Dispatch, InputHTMLAttributes, SetStateAction } from "react";

export interface NumberFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  setValue?: Dispatch<SetStateAction<string | undefined>>;
  error?: string;
}
