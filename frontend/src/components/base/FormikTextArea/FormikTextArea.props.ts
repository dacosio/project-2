import { Dispatch, SetStateAction, TextareaHTMLAttributes } from "react";

export interface FormikTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  error?: string;
  name: string;
  validate: (value: string) => string | undefined;
}
