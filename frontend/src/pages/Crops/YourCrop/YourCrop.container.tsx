import { useEffect, useState } from "react";

import YourCropView from "./YourCrop.view";
import { YourCropGeneratedProps } from "./YourCrop.props";
import { useGetPlantedCropsQuery } from "features/crops/cropApiSlice";
import { Crop } from "../../../types/store/CropState";
import { Option } from "components/base/Tab/Tab.props";

const YourCrop = (): JSX.Element => {
  const [option, setOption] = useState<Option | undefined>({
    value: "all",
    label: "All",
  });
  const [crops, setCrops] = useState<Crop[]>([]);
  const [crop, setCrop] = useState<Crop | undefined>(undefined);
  const [choiceVisibility, setChoiceVisibility] = useState<boolean>(false);
  const [suggestionVisibility, setSuggestionVisibility] =
    useState<boolean>(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  const { data: cropsData } = useGetPlantedCropsQuery({
    isPlanted:
      option?.value === "planted"
        ? true
        : option?.value === "to-plant"
        ? false
        : undefined,
  });

  const handleDrawerOpen = () => {
    setIsOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setIsOpenDrawer(false);
  };

  const handleOnClickCrop = (id: string) => {
    setCrop(crops.find((crop) => id === crop._id));
    handleDrawerOpen();
  };

  const handleOnClickChoice = () => {
    setChoiceVisibility(true);
  };

  const handleOnClickSuggestion = () => {
    setSuggestionVisibility(true);
  };

  const handleLater = () => {
    console.log("Later");
  };

  const handleNow = () => {
    console.log("Now");
  };

  const handlePlant = (id: string) => {
    console.log(id);
  };

  const handleFavorite = (id: string) => {
    console.log(id);
  };

  const handleOnDelete = (id: string) => {
    console.log(id);
  };

  useEffect(() => {
    const items = cropsData as Crop[];

    setCrops(items);
    if (items && 0 < items.length) {
      setCrop(items[0]);
    }
  }, [cropsData]);

  const generatedProps: YourCropGeneratedProps = {
    option,
    setOption,
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
    handleLater,
    handleNow,
    handlePlant,
    handleFavorite,
    handleOnDelete,
    handleDrawerOpen,
    handleDrawerClose,
  };
  return <YourCropView {...generatedProps} />;
};

export default YourCrop;
