import { ButtonHTMLAttributes } from "react";

import { Theme } from "types/Theme";

export type Variants =
  | "primary"
  | "outline"
  | "elevated"
  | "tonal"
  | "ghost"
  | "disabled"
  | "success"
  | "unselected";

export type IconPosition = "before" | "after" | null;
export type ButtonSizes = "lg" | "md" | "sm";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  color?: keyof Theme["text"];
  text?: string;
  iconPosition?: IconPosition;
  variant?: Variants;
  icon?: JSX.Element;
  takeFullWidth?: boolean;
  size?: ButtonSizes; // defaults to md
}

// Styles
export type ButtonStyleProps = {
  color?: keyof Theme["text"];
  variant: Variants;
  iconPosition: IconPosition;
  takeFullWidth?: boolean;
  size: ButtonSizes;
};
