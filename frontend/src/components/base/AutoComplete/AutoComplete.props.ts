import { Dispatch, SetStateAction } from "react";

export type Option = {
  value: string;
  label: string;
};

export interface AutoCompleteProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  value?: string | undefined;
  setValue?: Dispatch<SetStateAction<string | undefined>>;
  error?: string;
}
