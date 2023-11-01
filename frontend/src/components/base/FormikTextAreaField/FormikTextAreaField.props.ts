import { Dispatch, SetStateAction, TextareaHTMLAttributes } from "react";
import { Variants } from "../Typography/Typography.props";

export interface FormikTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  error?: string;
  name: string;
  labelVariant?: Variants 
  labelWeight: string;
}
