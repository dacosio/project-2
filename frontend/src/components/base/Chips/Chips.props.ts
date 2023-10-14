import { HTMLAttributes } from "react";
import { Theme } from "types/Theme";

export type Variants =
  | "filled"
  | "outlined";

export type IconPosition = "before" | "after" | null;
export type ButtonSizes = "lg" | "md" | "sm";

export interface ChipsProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  variant?: Variants; // defaults to 'filled'
  color?: keyof Theme["text"]; // optional color override
  size?: ButtonSizes; // defaults to md
  active?: boolean; // defaults to false
}

// Styles
export type ChipsStyleProps = {
    color?: keyof Theme["text"];
    variant: Variants;
    takeFullWidth?: boolean;
    active?: boolean;
    size: ButtonSizes;
  };
  
