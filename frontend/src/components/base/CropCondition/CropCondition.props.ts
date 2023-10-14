export interface CropConditionProps {
    title: string,
    output: string
}

export enum ConditionTitle {
    Temperature = 'Ideal Temperature',
    Humidity = 'Ideal Humidity',
    SoilPh = 'Soil pH',
    Yield = 'Growth Duration',
}