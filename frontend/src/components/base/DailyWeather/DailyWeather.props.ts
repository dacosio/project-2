export type Weather = "Sunny" | "Rainy" | "Cloudy";

export interface DailyWeatherProps {
  day: string;
  weather: Weather;
  min: number;
  max: number;
}
