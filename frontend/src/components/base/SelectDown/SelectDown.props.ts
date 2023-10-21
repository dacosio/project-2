import { Dispatch, SetStateAction } from "react";

export type Option = {
  value: string;
  label: string;
};

export interface SelectDownProps {
  label?: string;
  options: Option[];
  value: string | undefined;
  setValue: Dispatch<SetStateAction<string | undefined>>;
}
