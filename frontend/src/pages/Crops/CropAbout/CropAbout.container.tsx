import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CropAboutView from "./CropAbout.view";
import {
  useGetCropAboutQuery,
  useGetCropAboutAllQuery,
} from "./../../../features/cropEncyclopedia/cropEncyclopediaApiSlice";
import {
  usePlantMutation,
  // usePlantNowMutation,
} from "features/crops/cropApiSlice";
import toast from "react-hot-toast";
import { usePredictYieldMutation } from "features/condition/conditionApiSlice";

const CropAbout = (): JSX.Element => {
  const { id } = useParams();
  const { data } = useGetCropAboutQuery(`${id}`);
  const crops = data || [];
  const [plant] = usePlantMutation();
  const [predictYield] = usePredictYieldMutation();
  const [visibility, setVisibility] = useState<boolean>(false);

  // city -> hit predict endpoint
  // const estimatedYield

  const handlePlantLater = async () => {
    try {
      await plant({ cropId: id, plantNow: false }).then(() =>
        toast.success("Plant saved for later.")
      );
    } catch (error) {
      console.log(error);
      toast.error("An error occured. Please try again later");
    }
  };

  // add the estimated here only
  const handlePlant = (isError: boolean) => {
    if (isError) {
      toast.error("An error occured. Please, try again later");
    } else {
      setVisibility(false);
      toast.success("Crop successfully planted");
    }
  };

  const handlePlantNow = async () => {
    setVisibility(true);
  };

  const generatedProps = {
    crops,
    handlePlantNow,
    handlePlantLater,
    visibility,
    setVisibility,
    handlePlant,
  };
  return <CropAboutView {...generatedProps} />;
};

export default CropAbout;
