import { Dispatch, InputHTMLAttributes, SetStateAction } from "react";

export interface AutoCompleteProps
  extends InputHTMLAttributes<HTMLInputElement> {
  options: string[];
  value?: string | undefined;
  setValue?: Dispatch<SetStateAction<string | undefined>>;
  error?: string;
}
