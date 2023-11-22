import { RefObject } from "react";

export type Weather = "clear" | "partiallyCloudy" | "overcast" | "rain" | "thunderStorm" | "snow" | "snowRain" | "thunderStormRain";

export interface SingleHourlyWeatherProps {
    time: string;
    dayName : string;
    dayDate : string
    condition: Weather;
    temperature: number;
    state: string;
    selectedIndex: number;
    onClickControl: (newValue: number) => void;
    index: number;
}

export interface SingleHourlyWeatherStyleProps {
    active: boolean;
}
