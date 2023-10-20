import React, { useState } from "react";

import CropGuideView from "./CropGuide.view";
import { CropGuideGeneratedProps, YourSearchItemType } from "./CropGuide.props";

const CropGuide = (): JSX.Element => {
  const searches = [
    {
      _id: 1,
      name: "Carrot",
      about:
        "Carrots are root vegetables known for their orange color and sweet taste.",
      ideal_temp: "60-70°F (15-24°C)",
      humidity: "70-80%",
      growing_period: "70-80 days",
      fertilizer_composition: "N-P-K: 10-20-20",
      img_url:
        "https://res.cloudinary.com/dqkmua29w/image/upload/v1697606726/crops/hm0bbyebfpvzlessr1n1.webp",
    },
    {
      _id: 2,
      name: "Tomato",
      about:
        "Tomatoes are a popular vegetable used in various culinary dishes.",
      ideal_temp: "70-85°F (21-29°C)",
      humidity: "40-60%",
      growing_period: "60-85 days",
      fertilizer_composition: "N-P-K: 5-10-5",
      img_url:
        "https://res.cloudinary.com/dqkmua29w/image/upload/v1697606726/crops/wqmctunonbdbm3kqk4xt.webp",
    },
    {
      _id: 3,
      name: "Broccoli",
      about:
        "Tomatoes are a popular vegetable used in various culinary dishes.",
      ideal_temp: "70-85°F (21-29°C)",
      humidity: "40-60%",
      growing_period: "60-85 days",
      fertilizer_composition: "N-P-K: 5-10-5",
      img_url:
        "https://res.cloudinary.com/dqkmua29w/image/upload/v1697606726/crops/fdli2dgryzg54dr6yxez.webp",
    },
    {
      _id: 4,
      name: "Onion",
      about:
        "Tomatoes are a popular vegetable used in various culinary dishes.",
      ideal_temp: "70-85°F (21-29°C)",
      humidity: "40-60%",
      growing_period: "60-85 days",
      fertilizer_composition: "N-P-K: 5-10-5",
      img_url:
        "https://res.cloudinary.com/dqkmua29w/image/upload/v1697606727/crops/sllr15ehgc0jxdjdsddr.webp",
    },
    {
      _id: 5,
      name: "Cucumber",
      about:
        "Tomatoes are a popular vegetable used in various culinary dishes.",
      ideal_temp: "70-85°F (21-29°C)",
      humidity: "40-60%",
      growing_period: "60-85 days",
      fertilizer_composition: "N-P-K: 5-10-5",
      img_url:
        "https://res.cloudinary.com/dqkmua29w/image/upload/v1697606726/crops/oimgk1mnuszmk3flfxat.webp",
    },
  ];

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
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(filteredSearches || []);
  };

  const generatedProps = {
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
