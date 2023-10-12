import React, { useState, useEffect } from 'react';
import { SearchResultProps } from './SearchResult.props';
import { Container, SearchResultList, List } from './SearchResult.style';
import Typography from './../../base/Typography'

const SearchResult = ({ searchResults = [], delay }: SearchResultProps): JSX.Element => {
  const [displayResults, setDisplayResults] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayResults(true);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  return (
    <Container>
      {displayResults ? (
        searchResults.length === 0 ? (
          <Typography variant='small' align='left'>No results found</Typography>
        ) : (
          <SearchResultList>
            {searchResults.map((item, i) => (
              <List key={i}>
                {item.name}
                <Typography variant='small' align='left'>{item.about}</Typography>
              </List>
            ))}
          </SearchResultList>
        )
      ) : null}
    </Container>
  )
};

export default React.memo(SearchResult);
