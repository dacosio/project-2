export interface CardPageGeneratedProps {
    data: any[] | undefined;
    headerText: string;
    setHeaderText: React.Dispatch<React.SetStateAction<string>>;
    subText: string;
    setSubText: React.Dispatch<React.SetStateAction<string>>;
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
}

