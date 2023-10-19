export interface CropConditionProps {
    title: string,
    output: string
}

export enum ConditionTitle {
    Temperature = 'Temperature',
    Humidity = 'Humidity',
    Growth = 'Growth',
    Soil = 'Soil pH',
}