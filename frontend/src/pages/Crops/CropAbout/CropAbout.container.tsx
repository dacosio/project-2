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

const CropAbout = (): JSX.Element => {
  const { id } = useParams();
  const { data } = useGetCropAboutQuery(`${id}`);
  const crops = data || [];
  const [plant] = usePlantMutation();
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
  const handlePlantNow = async () => {
    try {
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
