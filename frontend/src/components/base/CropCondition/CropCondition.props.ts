export interface CropConditionProps {
    title: string,
    output: string
}

export enum ConditionTitle {
    Temperature = 'Temperature',
    Humidity = 'Humidity',
    ExpectedHarvest = 'Expected Harvest',
    Yield = 'Yield',
}