export interface CurrentWeatherProps {
  currentLocation: string;
  forecast: string;
  currentTemperature: number;
  lowTemperature: number;
  highTemperature: number;
  gradientColor1: string;
  gradientColor2: string;
  currentCondition: string;
}

// Styles
export type CurrentWeatherStyleProps = {
  gradientColor1: string;
  gradientColor2: string;
};
