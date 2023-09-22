import { HTMLAttributes, Dispatch, SetStateAction } from "react";

export type SwitchSizes = "lg" | "md" | "sm";

export interface SwitchProps extends HTMLAttributes<HTMLLabelElement> {
  size?: SwitchSizes; // defaults to md
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
}
