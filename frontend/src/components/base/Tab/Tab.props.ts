import { Dispatch, SetStateAction } from "react";

export type Option = {
  value: string;
  label: string;
};

export interface TabProps {
  options: Option[];
  value: Option | undefined;
  setValue: Dispatch<SetStateAction<Option | undefined>>;
  name: string;
}
