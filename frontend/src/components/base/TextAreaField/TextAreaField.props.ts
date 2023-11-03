import { Dispatch, TextareaHTMLAttributes, SetStateAction } from "react";
import { Variants } from "../Typography/Typography.props";

export interface TextAreaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  error?: string;
  labelVariant?: Variants;
  labelWeight?: string;
}
