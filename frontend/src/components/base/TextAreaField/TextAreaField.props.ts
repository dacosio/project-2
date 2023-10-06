import { Dispatch, HTMLAttributes, SetStateAction } from "react";

export interface TextAreaFieldProps
  extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  error?: string;
}
