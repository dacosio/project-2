export interface SearchProps {
    dynamicPlaceholder: string;
    onSearch: (searchTerm: string) => void;
    delay: number;
    searchTerm: string;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setSearchTerm: (newSearchTerm: string) => void;
} 