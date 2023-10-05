import { Weather } from "const/weathers";

export type DailyWeather = {
  humidity: number;
  weather: Weather;
  min: number;
  max: number;
};

export interface WeeklyWeatherProps {
  dailyWeathers: DailyWeather[];
  dayOffset: number;
}
