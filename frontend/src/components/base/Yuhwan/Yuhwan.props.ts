import { ButtonHTMLAttributes } from "react";

import { Theme } from "types/Theme";

export interface YuhwanProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  avatar: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}
