import { CropGuideGeneratedProps } from "./CropGuide.props";
import {
  Wrapper,
  Container,
  Header,
  SearchContainer,
  Body,
  AllCrop,
} from "./CropGuide.style";
import PlantResult from "components/base/PlantResult";
import Typography from "components/base/Typography";
import Search from "components/base/Search";
import SearchResult from "components/base/SearchResult";
import { Link } from "react-router-dom";
import Loading from "components/base/Loading";

const CropGuideView = (props: CropGuideGeneratedProps) => {
  const {
    searches,
    searchResults,
    imageUrls,
    loading,
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
        className="crop"
      >
        <PlantResult
          key={i}
          imageUrl={imageUrls[i]}
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
            <AllCrop>{loading ? <Loading /> : displayAllCrop()}</AllCrop>
          )}
        </Body>
      </Container>
    </Wrapper>
  );
};

export default CropGuideView;
