import { Dispatch, SetStateAction } from "react";
import { Crop } from "types/store/CropState";

export interface DashboardGeneratedProps {
  crops: Crop[] | undefined;
  isLoading: boolean;
  currentLocation: string;
  forecast: string;
  currentTemperature: number;
  lowTemperature: number;
  highTemperature: number;
  precipitation: number;
  humidity: number;
  wind: number;
  gradientColor1: string;
  gradientColor2: string;
  currentCondition: string;
  page: string;
  onSelectedSearchLocationWeather: (address: string) => void;
  MOCK_OPTIONS: string[];
  state: string;
  onSetState: (state: string) => void;
  weatherData: { [key: string]: any };
  onSelectedWeatherIndexWeather: (value: number) => void;
  selectedIndex : number;
  handleOpenCard: (id: string) => void;
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  choiceVisibility: boolean;
  setChoiceVisibility: Dispatch<SetStateAction<boolean>>;
  suggestionVisibility: boolean;
  setSuggestionVisibility: Dispatch<SetStateAction<boolean>>;
  handleLater: (isError: boolean) => void;
  handleNow: (isError: boolean) => void;
}
