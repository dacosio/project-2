import { ButtonHTMLAttributes } from "react";

export interface YuhwanProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  avatar: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}
