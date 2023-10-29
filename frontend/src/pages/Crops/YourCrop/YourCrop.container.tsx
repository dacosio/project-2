import { useEffect, useState } from "react";

import YourCropView from "./YourCrop.view";
import { YourCropGeneratedProps } from "./YourCrop.props";
import {
  useFavoriteMutation,
  useGetPlantedCropsQuery,
  usePlantNowMutation,
  useRemoveCropMutation,
} from "../../../features/crops/cropApiSlice";
import toast from "react-hot-toast";

const YourCrop = (): JSX.Element => {
  const [plantNow] = usePlantNowMutation();
  const [favorite] = useFavoriteMutation();
  const [removeCrop] = useRemoveCropMutation();
  const { data, isLoading } = useGetPlantedCropsQuery("");
  const [crops, setCrops] = useState<
    { id: string; name: string; isPlanted: boolean }[]
  >([]);
  const [crop, setCrop] = useState<
    { id: string; name: string; isPlanted: boolean } | undefined
  >(undefined);
  const [choiceVisibility, setChoiceVisibility] = useState<boolean>(false);
  const [suggestionVisibility, setSuggestionVisibility] =
    useState<boolean>(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setIsOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setIsOpenDrawer(false);
  };

  const handleOnClickCrop = (id: string) => {
    setCrop(crops.find((crop) => id === crop.id));
    handleDrawerOpen();
  };

  const handleOnClickChoice = () => {
    setChoiceVisibility(true);
  };

  const handleOnClickSuggestion = () => {
    setSuggestionVisibility(true);
  };

  const handlePlant = async (id: string) => {
    console.log(id);

    await plantNow({ id })
      .then(() => toast.success("Crop successfully planted"))
      .catch(() => {
        toast.error("An error occured. Please, try again later");
      });
  };
  //
  const handleFavorite = async (id: string) => {
    console.log(id);
    // pass the id and the favorite button should be toggled between true or false.
    // await favorite({ id, isFavorite: true });
  };

  const handleOnDelete = async (id: string) => {
    console.log(id);
    await removeCrop({ id })
      .then(() => toast.success("Crop successfully removed"))
      .catch(() => {
        toast.error("An error occured. Please, try again later");
      });
  };

  useEffect(() => {
    console.log(data);
  }, []);

  useEffect(() => {
    const cropItems = [
      { id: "1", name: "Crop1", isPlanted: true },
      { id: "2", name: "Crop2", isPlanted: false },
      { id: "3", name: "Crop3", isPlanted: true },
      { id: "4", name: "Crop4", isPlanted: true },
      { id: "5", name: "Crop5", isPlanted: true },
      { id: "6", name: "Crop6", isPlanted: false },
      { id: "7", name: "Crop7", isPlanted: true },
      { id: "8", name: "Crop8", isPlanted: true },
      { id: "9", name: "Crop9", isPlanted: true },
      { id: "10", name: "Crop10", isPlanted: false },
      { id: "11", name: "Crop11", isPlanted: true },
      { id: "12", name: "Crop12", isPlanted: true },
      { id: "13", name: "Crop13", isPlanted: false },
      { id: "14", name: "Crop14", isPlanted: true },
    ];

    setCrops(cropItems);
    if (0 < cropItems.length) {
      setCrop(cropItems[0]);
    }
  }, []);

  const generatedProps: YourCropGeneratedProps = {
    crops,
    crop,
    choiceVisibility,
    setChoiceVisibility,
    suggestionVisibility,
    setSuggestionVisibility,
    isOpenDrawer,
    handleOnClickCrop,
    handleOnClickChoice,
    handleOnClickSuggestion,
    handlePlant,
    handleFavorite,
    handleOnDelete,
    handleDrawerOpen,
    handleDrawerClose,
  };
  return <YourCropView {...generatedProps} />;
};

export default YourCrop;
