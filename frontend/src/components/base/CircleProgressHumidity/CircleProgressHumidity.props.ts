import { CSSProperties } from "react";

export interface CircleProgressHumidityProps {
    title: string;
    subtitle: string;
    value: number;
    style?: CSSProperties;
    size: "mobile" | "desktop";
    maxValue: number;
    id: string;
}
