import React, { useState } from "react";
import { CropGuideGeneratedProps } from "./CropGuide.props";
import {
  Wrapper,
  Container,
  Header,
  SearchContainer,
  Body,
  Conditions,
  GridLayout,
  AllCrop,
} from "./CropGuide.style";
import PlantResult from "components/base/PlantResult";
import Typography from "components/base/Typography";
import Search from "components/base/Search";
import SearchResult from "components/base/SearchResult";
import { Link } from "react-router-dom";

const CropGuideView = (props: CropGuideGeneratedProps) => {
  const {
    data,
    searches,
    searchResults,
    setSearchResults,
    searchTerm,
    setSearchTerm,
    delay,
    handleSearch,
    fetchSearchResult,
  } = props;

  const displayAllCrop = () => {
    return searches.map((con, i) => (
      <Link
        key={i}
        to={`/crop-guide/${con._id}`}
        style={{ textDecoration: "none" }}
      >
        <PlantResult
          key={i}
          imageUrl={con.imageURL}
          imageAlt="random image"
          imgWidth="100%"
          imgHeight="100%"
          cropName={con.cropName}
        />
      </Link>
    ));
  };

  return (
    <Wrapper>
      <Container>
        <Header>
          <Typography variant="title2" textColor="noshade">
            Crop Guide
          </Typography>
          <Typography variant="subtitle" weight="200" textColor="noshade">
            Have a crop or two you want to plant?
            <br />
            Get tips on growing them from us!
          </Typography>

          <SearchContainer>
            <Search
              dynamicPlaceholder="Search for crop, plants, fruits etc..."
              onSearch={fetchSearchResult}
              delay={delay}
              searchTerm={searchTerm}
              handleSearch={handleSearch}
              setSearchTerm={setSearchTerm}
            />
          </SearchContainer>
        </Header>
        <Body>
          {searchTerm ? (
            <SearchResult
              searchTerm={searchTerm}
              searchResults={searchResults}
              delay={delay}
            />
          ) : (
            <AllCrop>{displayAllCrop()}</AllCrop>
          )}
        </Body>
      </Container>
    </Wrapper>
  );
};

export default CropGuideView;
