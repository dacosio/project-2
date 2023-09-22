import { HTMLAttributes } from "react";

export type SwitchSizes = "lg" | "md" | "sm";

export interface SwitchProps extends HTMLAttributes<HTMLLabelElement> {
  size?: SwitchSizes; // defaults to md
  value: boolean;
  setValue: (value: boolean) => void;
}

export type SwitchStyleProps = {
  _size: SwitchSizes;
};
