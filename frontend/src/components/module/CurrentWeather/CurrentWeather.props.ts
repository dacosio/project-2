export interface CurrentWeatherProps {
  currentLocation: string;
  forecast: string;
  currentTemperature: number;
  lowTemperature: number;
  highTemperature: number;
  precipitation: number;
  humidity : number;
  wind : number;
  gradientColor1: string;
  gradientColor2: string;
  currentCondition: string;
  page : string;
  onSelectedSearchLocation: (address: string) => void;
  collapseState: Boolean;
}

// Styles
export type CurrentWeatherStyleProps = {
  gradientColor1: string;
  gradientColor2: string;
};
