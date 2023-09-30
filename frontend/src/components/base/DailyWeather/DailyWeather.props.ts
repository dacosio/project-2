export type DailyWeatherDays =
  | "Sun"
  | "Mon"
  | "Tues"
  | "Wed"
  | "Th"
  | "Fri"
  | "Sat";

export type DailyWeatherWeathers = "Sunny" | "Cloudy";

export interface DailyWeatherProps {
  day: DailyWeatherDays;
  weather: DailyWeatherWeathers;
  min: number;
  max: number;
}
