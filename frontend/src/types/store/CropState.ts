export interface Crop {
  _id: string;
  cropName: string;
  description: string;
  idealTemperature: IdealTemperature;
  humidity: GrowthDuration;
  growthDuration: GrowthDuration;
  soilPh: GrowthDuration;
  soilN: number;
  soilP: number;
  soilK: number;
  growingTips: string[];
  tools: string[];
  imageURL: string;
  userId: string;
  isFavorite: boolean;
  isPlanted: boolean;
  datePlanted: Date;
  estimatedYield: string;
  __v: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface GrowthDuration {
  min: number;
  max: number;
}

export interface IdealTemperature {
  fahrenheit: GrowthDuration;
  celcius: GrowthDuration;
}

export interface Option {
  value: string;
  label: string;
}

export interface SelectedCropProps {
  selectedOption: Option;
  selectedCropId: string;
}
