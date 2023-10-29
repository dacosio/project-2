export interface CropGuideGeneratedProps {
    searches: {
        _id: string;
        cropName: string;
        description: string;
        idealTemperature: object;
        humidity: object;
        growthDuration: object;
        soilPh: object;
        soilN: number;
        soilP: number;
        soilK: number;
        growingTips: Array<string>;
        tools: Array<string>;
        imageURL: string;
    }[];
    searchResults: {
        _id: string;
        cropName: string;
        description: string;
        idealTemperature: object;
        humidity: object;
        growthDuration: object;
        soilPh: object;
        soilN: number;
        soilP: number;
        soilK: number;
        growingTips: Array<string>;
        tools: Array<string>;
        imageURL: string;
    }[];
    setSearchResults: (results: YourSearchItemType[]) => void;
    searchTerm: string;
    setSearchTerm: (newTerm: string) => void;
    delay: number;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fetchSearchResult: any;
    data: any;
    imageUrls: any;
}

export type YourSearchItemType = {
    _id: string;
    cropName: string;
    description: string;
    idealTemperature: object;
    humidity: object;
    growthDuration: object;
    soilPh: object;
    soilN: number;
    soilP: number;
    soilK: number;
    growingTips: Array<string>;
    tools: Array<string>;
    imageURL: string;
};