import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import { Crop } from "./../../../types/store/CropState";
import {
  storeSelectedCropId,
  storeSelectedOption,
} from "./../../../features/crops/cropSlice";
import { useAppDispatch } from "./../../../app/hooks";

const CropAbout = (): JSX.Element => {
  const { id } = useParams();
  const { data } = useGetCropAboutQuery(`${id}`);
  const crops = data || [];
  const [plant] = usePlantMutation();
  const [predictYield] = usePredictYieldMutation();
  const [visibility, setVisibility] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  // city -> hit predict endpoint
  // const estimatedYield

  const handlePlantLater = async () => {
    try {
      await plant({ cropId: id, plantNow: false })
        .unwrap()
        .then((response: Crop) => {
          toast.success("Plant saved for later.");
          setTimeout(() => {
            navigate("/your-crops");
            dispatch(
              storeSelectedOption({
                value: "to-plant",
                label: "To Plant",
              })
            );
            dispatch(storeSelectedCropId(response._id));
          }, 500);
        });
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
      setTimeout(() => {
        navigate("/your-crops");
      }, 500);
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
    setIsModalVisible,
  };
  return <CropAboutView {...generatedProps} />;
};

export default CropAbout;
