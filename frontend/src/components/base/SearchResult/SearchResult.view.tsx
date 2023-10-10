import React from 'react';
import { SearchResultProps } from './SearchResult.props';
import { Container } from './SearchResult.style';

const SearchResult = ({ searchResults }: SearchResultProps): JSX.Element => {
  return <Container> {searchResults?.map((item) => item.name)} </Container>;
};

export default React.memo(SearchResult);
