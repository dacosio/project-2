import { Dispatch, InputHTMLAttributes, SetStateAction } from "react";

export interface DateFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  setValue?: Dispatch<SetStateAction<string | undefined>>;
  error?: string;
}
