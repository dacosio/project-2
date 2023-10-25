import React, { useState } from "react";

import CropGuideView from "./CropGuide.view";
import { CropGuideGeneratedProps, YourSearchItemType } from "./CropGuide.props";
import {
  useGetCropAboutQuery,
  useGetCropAboutAllQuery,
} from "./../../../features/cropEncyclopedia/cropEncyclopediaApiSlice";

const CropGuide = (): JSX.Element => {
  const { data } = useGetCropAboutAllQuery("");
  const searches = data || [];

  const [searchResults, setSearchResults] = useState<Array<YourSearchItemType>>(
    []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const delay = 500;

  const handleSearch = (e: { target: { value: string } }) => {
    setSearchTerm(e.target.value);
  };

  const fetchSearchResult = async (searchTerm: any) => {
    const filteredSearches = searches?.filter((item) => {
      return item.cropName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(filteredSearches || []);
  };

  const generatedProps = {
    data: data,
    searches: searches,
    searchResults: searchResults,
    setSearchResults: setSearchResults,
    searchTerm: searchTerm,
    setSearchTerm: setSearchTerm,
    delay: delay,
    handleSearch: handleSearch,
    fetchSearchResult: fetchSearchResult,
  };
  return <CropGuideView {...generatedProps} />;
};

export default CropGuide;
