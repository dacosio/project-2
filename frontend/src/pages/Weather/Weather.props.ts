export interface WeatherGeneratedProps {
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
  onSelectedSearchLocationWeather: (address: string) => void;
  MOCK_OPTIONS:string[];
  state: string;
  onSetState: (state: string) => void;
  weatherData : { [key: string]: any };
  onSelectedWeatherIndexWeather: (value: number) => void;
  selectedIndex : number;
}