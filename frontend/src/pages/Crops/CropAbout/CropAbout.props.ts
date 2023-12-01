import { Dispatch, SetStateAction } from "react";

interface IdealTemperature {
  fahrenheit: {
    min: number;
    max: number;
  };
  celcius: {
    min: number;
    max: number;
  };
}

export interface Crop {
  _id: string;
  cropName: string;
  description: string;
  idealTemperature: IdealTemperature;
  humidity: {
    min: number;
    max: number;
  };
  growthDuration: {
    min: number;
    max: number;
  };
  soilPh: {
    min: number;
    max: number;
  };
  soilN: number;
  soilP: number;
  soilK: number;
  growingTips: string[];
  tools: string[];
  imageURL: string;
}

export interface CropAboutProps {
  crops: Crop[];
  handlePlantLater: () => void;
  handlePlantNow: () => void;
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  handlePlant: (isError: boolean) => void;
}
