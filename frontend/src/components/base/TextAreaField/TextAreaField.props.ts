import { Dispatch, TextareaHTMLAttributes, SetStateAction } from "react";

export interface TextAreaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  error?: string;
}
