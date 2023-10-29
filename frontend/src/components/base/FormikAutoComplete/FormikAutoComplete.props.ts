import { Dispatch, InputHTMLAttributes, SetStateAction } from "react";

export type Option = {
  value: string;
  label: string;
};

export interface FormikAutoCompleteProps
  extends InputHTMLAttributes<HTMLInputElement> {
  options: Option[];
  option?: Option | undefined;
  setOption?: Dispatch<SetStateAction<Option | undefined>>;
  error?: string;
  name: string;
}
