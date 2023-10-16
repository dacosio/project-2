import { CSSProperties } from "react";

export interface CircleProgressProps {
  title: string;
  subtitle: string;
  value: number;
  style?: CSSProperties;
  size: "mobile" | "desktop";
  maxValue: number;
  id: string;
}
