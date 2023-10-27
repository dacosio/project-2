import { Crop } from "./CropState";

export interface AddSuggestion {
  location: string;
  date: string;
  nitrogen: string;
  phosphorus: string;
  potassium: string;
  ph: string;
  crop?: Crop;
}
