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
  onDelete?: () => void; // function to call when delete icon is clicked
  color?: keyof Theme["text"]; // optional color override
}

// Styles
export type ChipsStyleProps = {
    color?: keyof Theme["text"];
    variant: Variants;
    iconPosition: IconPosition;
    takeFullWidth?: boolean;
    size: ButtonSizes;
  };
  
