export interface CropGuideGeneratedProps {
    searches: {
        _id: number;
        name: string;
        about: string;
        ideal_temp: string;
        humidity: string;
        growing_period: string;
        fertilizer_composition: string;
        img_url: string;
    }[];
    searchResults: {
        _id: number;
        name: string;
        about: string;
        ideal_temp: string;
        humidity: string;
        growing_period: string;
        fertilizer_composition: string;
        img_url: string;
    }[];
    setSearchResults: (results: YourSearchItemType[]) => void;
    searchTerm: string;
    setSearchTerm: (newTerm: string) => void;
    delay: number;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fetchSearchResult: any;
}

export type YourSearchItemType = {
    _id: number;
    name: string;
    about: string;
    ideal_temp: string;
    humidity: string;
    growing_period: string;
    fertilizer_composition: string;
    img_url: string;
};