import { Crop } from "types/store/CropState";

export interface DashboardGeneratedProps {
  crops: Crop[] | undefined;
  isLoading: boolean;
}
