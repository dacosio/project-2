import { Crop } from "./CropState";

export interface AddSuggestion {
  date: string;
  nitrogen: string;
  phosphorus: string;
  potassium: string;
  ph: string;
  name: string;
  crop?: Crop;
}
