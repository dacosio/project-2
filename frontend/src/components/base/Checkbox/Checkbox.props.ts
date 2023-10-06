import { Dispatch, SetStateAction, HTMLAttributes } from "react";

export interface CheckboxProps {
  checkboxStatus: boolean;
  setCheckboxStatus: Dispatch<SetStateAction<boolean>>;
}
