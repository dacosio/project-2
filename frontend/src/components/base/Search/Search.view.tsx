import React, { useEffect } from "react";
import { SearchProps } from "./Search.props";
import { Container } from "./Search.style";
import TextField from "./../TextField";
import useDebounce from "./../../../utils/hooks/useDebounce";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { MagnifierSvg } from "../SVG";

const Search = (props: SearchProps): JSX.Element => {
  const {
    dynamicPlaceholder,
    onSearch,
    delay,
    searchTerm,
    handleSearch,
    setSearchTerm,
  } = props;
  console.log(searchTerm);
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
          searchTerm ? (
            <AiOutlineCloseCircle
              size="20px"
              style={{ cursor: "pointer" }}
              onClick={() => setSearchTerm("")}
            />
          ) : (
            <MagnifierSvg width={20} />
          )
        }
        type="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder={dynamicPlaceholder}
        labelVariant="body"
      ></TextField>
    </Container>
  );
};

export default React.memo(Search);
