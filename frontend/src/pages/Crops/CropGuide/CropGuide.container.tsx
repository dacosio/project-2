import React, { useState, useEffect } from "react";

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

  // for images
  const getImageUrl = (cropName: any) => `/assets/${cropName}.webp`;
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const urls = searches.map((con) => getImageUrl(con.cropName));

    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });

    setImageUrls(urls);
  }, [searches]);

  const generatedProps = {
    data: data,
    searches: searches,
    searchResults: searchResults,
    imageUrls: imageUrls,
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
