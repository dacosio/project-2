export interface SearchProps {
    onSearch: (searchTerm: string) => void;
    searchResults: any[] | undefined;
}