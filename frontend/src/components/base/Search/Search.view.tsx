import React, { useState, useEffect } from 'react';
import { SearchProps } from './Search.props';
import { Container } from './Search.style';
import TextField from './../TextField'
import useDebounce from './../../../utils/hooks/useDebounce'
import SearchResult from './../SearchResult'
import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai'

const Search = (props: SearchProps): JSX.Element => {
  const {
    dynamicPlaceholder,
    onSearch,
    delay,
    searchTerm,
    handleSearch,
    setSearchTerm
  } = props
  console.log(searchTerm)
  const debouncedSearchTerm = useDebounce(searchTerm, delay);

  useEffect(() => {
    if (debouncedSearchTerm) {
      onSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <Container>
      <TextField
        RightComponent={
          searchTerm ?
            <AiOutlineCloseCircle
              size="20px"
              style={{ cursor: "pointer" }}
              onClick={() => setSearchTerm('')}
            /> :
            <AiOutlineSearch
              size="20px"
              style={{ cursor: "pointer" }}
            />
        }
        type='search'
        value={searchTerm}
        onChange={handleSearch}
        placeholder={dynamicPlaceholder}>
      </TextField>
    </Container>
  )
};

export default React.memo(Search);
