import React, { useState, useEffect } from 'react';
import { SearchProps } from './Search.props';
import { Container } from './Search.style';
import TextField from './../TextField'
import useDebounce from './../../../utils/hooks/useDebounce'
import SearchResult from './../SearchResult'

const Search = ({ onSearch, searchResults }: SearchProps): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');
  const delay = 500;
  const debouncedSearchTerm = useDebounce(searchTerm, delay);

  const handleSearch = (e: { target: { value: string } }) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      onSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <Container>
      <TextField
        type='search'
        label='Search'
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Input Text Here">
      </TextField>
      {searchTerm && <SearchResult searchResults={searchResults} delay={delay} />}
    </Container>
  )
};

export default React.memo(Search);
