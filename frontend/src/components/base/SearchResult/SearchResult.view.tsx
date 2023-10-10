import React from 'react';
import { SearchResultProps } from './SearchResult.props';
import { Container, SearchResultList, List } from './SearchResult.style';
import Typography from './../../base/Typography'

const SearchResult = ({ searchResults }: SearchResultProps): JSX.Element => {
  return (
    <Container>
      <SearchResultList>
        {searchResults?.map((item, i) =>
          <List key={i}>
            {item.name}
            <Typography variant='small'>{item.about}</Typography>
          </List>
        )}
      </SearchResultList>
    </Container>
  )
};

export default React.memo(SearchResult);
