export interface SearchData {
    _id: string;
    name: string;
    about: string;
    ideal_temp: string;
    humidity: string;
    growing_period: string;
    fertilizer_composition: string;
}

export interface HomeGeneratedProps {
    data: SearchData[] | undefined;
    name: string;
    about: string;
    ideal_temp: string;
    humidity: string;
    growing_period: string;
    fertilizer_composition: string;
}