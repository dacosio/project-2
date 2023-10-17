import { Dispatch, SetStateAction } from "react";

export type Option = {
  value: string;
  label: string;
};

export interface TabProps {
  options: Option[];
  value: string | undefined;
  setValue: Dispatch<SetStateAction<string | undefined>>;
  name: string;
}
