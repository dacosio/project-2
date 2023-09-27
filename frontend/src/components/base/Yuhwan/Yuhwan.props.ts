import { ButtonHTMLAttributes } from "react";

export interface YuhwanProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  avatar: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  onDelete: (id: string) => void;
  onUpdate: (
    id: string,
    title: string,
    subtitle: string,
    description: string
  ) => void;
}
