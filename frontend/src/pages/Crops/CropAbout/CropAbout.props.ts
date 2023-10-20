export interface Crop {
    _id: number;
    name: string;
    description: string;
    idealTemperature: string;
    humidity: string;
    growthDuration: string;
    soilPh: string;
    soilN: string;
    soilP: string;
    soilK: string;
    growingTips: string[];
    tools: string[];
    img_url: string;
}
export interface CropAboutProps {
    crops: Crop[];
    handlePlantLater: () => void;
    handlePlantNow:  () => void;
}
