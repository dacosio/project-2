import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchResultProps } from "./SearchResult.props";
import {
  Container,
  SearchResultList,
  List,
  Result,
  Body,
  ResultCount,
  ResultHeader,
  SearchHelp,
  NoResultUL,
  NoResultList,
} from "./SearchResult.style";
import Typography from "./../../base/Typography";
import PlantResult from "../PlantResult";

const SearchResult = ({
  searchResults = [],
  delay,
  searchTerm,
}: SearchResultProps): JSX.Element => {
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
          <Result>
            <Typography variant="title3" align="left">
              Oh no, seems like we couldn't find a match for "{searchTerm}"
            </Typography>
            <SearchHelp>
              <Typography variant="body" weight="bold">
                Search help
              </Typography>
              <NoResultUL>
                <NoResultList>
                  <Typography variant="body">
                    Check your search for typos.
                  </Typography>
                </NoResultList>
                <NoResultList>
                  <Typography variant="body">
                    Use a more generic search term.
                  </Typography>
                </NoResultList>
                <NoResultList>
                  <Typography variant="body">
                    The crop you’re searching for may not yet be in our
                    database.
                  </Typography>
                </NoResultList>
              </NoResultUL>
            </SearchHelp>
          </Result>
        ) : (
          <Body>
            <ResultHeader>
              <Typography variant="title5">Search Results</Typography>
              <ResultCount>
                <Typography
                  variant="subtitle"
                  weight="500"
                  textColor="noshade"
                  align="center"
                  style={{ lineHeight: "2rem" }}
                >
                  {searchResults.length}
                </Typography>
              </ResultCount>
            </ResultHeader>

            <SearchResultList>
              {searchResults.map((item, i) => (
                <Link
                  key={i}
                  to={`/crop-guide/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <PlantResult
                    key={i}
                    imageUrl={item.imageURL}
                    imageAlt="Test"
                    cropName={item.cropName}
                    imgWidth="100%"
                    imgHeight="100%"
                  />
                </Link>
              ))}
            </SearchResultList>
          </Body>
        )
      ) : null}
    </Container>
  );
};

export default React.memo(SearchResult);
