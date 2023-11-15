import { useState, useEffect } from "react";

import CropGuideView from "./CropGuide.view";
import { YourSearchItemType } from "./CropGuide.props";
import { useGetCropAboutAllQuery } from "./../../../features/cropEncyclopedia/cropEncyclopediaApiSlice";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urls = searches.map((con) => getImageUrl(con.cropName));
    const loadedImagesCount = urls.length;
    let imagesLoaded = 0;

    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === loadedImagesCount) {
          setLoading(false);
        }
      };
    });

    setImageUrls(urls);
  }, [searches]);

  const generatedProps = {
    data: data,
    searches: searches,
    searchResults: searchResults,
    imageUrls: imageUrls,
    loading: loading,
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
