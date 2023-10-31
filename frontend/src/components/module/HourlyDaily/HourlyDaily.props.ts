export interface HourlyDailyProps {
    weatherDataArray : { [key: string]: any };
    state: string;
    onSelectedWeatherIndex: (value: number) => void;
    index : number;
}
