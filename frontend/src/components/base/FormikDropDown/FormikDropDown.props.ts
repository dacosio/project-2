import { Dispatch, SetStateAction, SelectHTMLAttributes } from "react";

export type Option = {
  value: string;
  label: string;
};

export interface FormikDropDownProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  value?: string | undefined;
  setValue?: Dispatch<SetStateAction<string | undefined>>;
  error?: string;
  name: string;
}
