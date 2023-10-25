import React from "react";
import { useParams } from "react-router-dom";
import CropAboutView from "./CropAbout.view";
import {
  useGetCropAboutQuery,
  useGetCropAboutAllQuery,
} from "./../../../features/cropEncyclopedia/cropEncyclopediaApiSlice";

const CropAbout = (): JSX.Element => {
  const { id } = useParams();
  const { data } = useGetCropAboutQuery(`${id}`);
  const crops = data || [];

  const handlePlantNow = () => {
    console.log("Plant Now");
  };

  const handlePlantLater = () => {
    console.log("Plant Later");
  };

  const generatedProps = {
    crops: crops,
    handlePlantNow: handlePlantNow,
    handlePlantLater: handlePlantLater,
  };
  return <CropAboutView {...generatedProps} />;
};

export default CropAbout;
