export type Weather = "clear" | "partiallyCloudy" | "overcast" | "rain" | "thunderStorm" | "snow" | "snowRain" | "thunderStormRain";

export interface SingleHourlyWeatherProps {
    time: string;
    dayName : string;
    dayDate : string
    condition: Weather;
    temperature: number;
    hourlyFlag: Boolean;
}
