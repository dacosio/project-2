import { Dispatch, InputHTMLAttributes, SetStateAction } from "react";

export type Option = {
  value: string;
  label: string;
};

export interface AutoCompleteProps
  extends InputHTMLAttributes<HTMLInputElement> {
  options: Option[];
  option?: Option | undefined;
  setOption?: Dispatch<SetStateAction<Option | undefined>>;
  error?: string;
  paddingRight?: string;
}
