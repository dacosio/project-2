import { HTMLAttributes } from "react";

export interface WeatherCardProps extends HTMLAttributes<HTMLDivElement> {
 weatherData: { [key: string]: any };

}
