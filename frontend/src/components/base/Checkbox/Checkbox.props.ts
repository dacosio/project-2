import { Dispatch, SetStateAction, HTMLAttributes } from "react";

export interface CheckboxProps extends HTMLAttributes<HTMLLabelElement> {
  checkboxStatus: boolean;
  setCheckboxStatus: Dispatch<SetStateAction<boolean>>;
}
