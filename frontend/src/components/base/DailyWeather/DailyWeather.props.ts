import { Weather } from "const/weathers";

export interface DailyWeatherProps {
  day: string;
  weather: Weather;
  min: number;
  max: number;
}
