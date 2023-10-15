export type Variant = "temperature" | "humidity" | "duration" | "yield" | "ph";

export type Sizing = "mobile" | "desktop";

export interface CropConditionProps {
  variant: Variant;
  sizing?: Sizing;
  title?: string;
  description: string;
}
