import { Dispatch, SetStateAction } from "react";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  secured?: boolean;
  error?: string;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  alert?: string;
  prefix?: string;
}
