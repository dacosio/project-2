import { Dispatch, SetStateAction } from "react";
import { Variants } from "../Typography/Typography.props";

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  secured?: boolean;
  error?: string;
  LeftComponent?: React.ReactNode;
  alert?: string;
  prefix?: string;
  labelVariant?: Variants;
  labelWeight?: string;
}
