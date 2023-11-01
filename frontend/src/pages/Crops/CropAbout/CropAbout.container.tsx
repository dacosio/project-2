import React from "react";
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
  const handlePlantNow = async () => {
    try {
      // const estimatedYield = await predictYield({cropName, city});
      // await plant({ cropId: id, plantNow: true, estimatedYield }).then(() =>
      //   toast.success("Planted now.")
      // );
      await plant({ cropId: id, plantNow: true }).then(() =>
        toast.success("Planted now.")
      );
    } catch (error) {
      console.log(error);
      toast.error("An error occured. Please try again later");
    }
  };

  const generatedProps = {
    crops,
    handlePlantNow,
    handlePlantLater,
  };
  return <CropAboutView {...generatedProps} />;
};

export default CropAbout;
