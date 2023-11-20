import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import YourCropView from "./YourCrop.view";
import { YourCropGeneratedProps, Option } from "./YourCrop.props";
import {
  useFavoriteMutation,
  useGetPlantedCropsQuery,
  useRemoveCropMutation,
} from "../../../features/crops/cropApiSlice";
import { Crop } from "../../../types/store/CropState";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectSelectedCropId,
  selectSelectedOption,
  storeSelectedCropId,
  storeSelectedOption,
} from "../../../features/crops/cropSlice";

const YourCrop = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const selectedOption = useAppSelector(selectSelectedOption);
  const selectedCropId = useAppSelector(selectSelectedCropId);

  const [option, setOption] = useState<Option | undefined>(selectedOption);
  const [crops, setCrops] = useState<Crop[]>([]);
  const [crop, setCrop] = useState<Crop | undefined>(undefined);
  const [choiceVisibility, setChoiceVisibility] = useState<boolean>(false);
  const [suggestionVisibility, setSuggestionVisibility] =
    useState<boolean>(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [favorite] = useFavoriteMutation();
  const [removeCrop] = useRemoveCropMutation();
  const {
    data: cropsData,
    isLoading,
    isSuccess,
  } = useGetPlantedCropsQuery({
    isPlanted: undefined,
  });

  const handleDrawerOpen = () => {
    setIsOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setIsOpenDrawer(false);
  };

  const handleOnClickCrop = (id: string) => {
    dispatch(storeSelectedCropId(id));
    handleDrawerOpen();
  };

  const handleOnClickChoice = () => {
    setChoiceVisibility(true);
  };

  const handleOnClickSuggestion = () => {
    setSuggestionVisibility(true);
  };

  const handleLater = (isError: boolean) => {
    setChoiceVisibility(false);
    setSuggestionVisibility(false);

    if (isError) {
      toast.error("An error occured. Please, try again later");
    } else {
      toast.success("Crop successfully added");
    }
  };

  const handleNow = (isError: boolean) => {
    setChoiceVisibility(false);
    setSuggestionVisibility(false);

    if (isError) {
      toast.error("An error occured. Please, try again later");
    } else {
      toast.success("Crop successfully planted");
    }
  };

  const handlePlant = (isError: boolean) => {
    if (isError) {
      toast.error("An error occured. Please, try again later");
    } else {
      toast.success("Crop successfully planted");
    }
  };

  const handleFavorite = async (id: string, isFavorite: boolean) => {
    await favorite({ id, isFavorite })
      .then(() => {
        isFavorite
          ? toast.success("Crop successfully added to favorite list")
          : toast.success("Crop successfully removed from favorite list");
      })
      .catch(() => {
        toast.error("An error occured. Please, try again later");
      });
  };

  const handleOnDelete = async (id: string) => {
    await removeCrop({ id })
      .then(() => {
        toast.success("Crop successfully removed");
      })
      .catch(() => {
        toast.error("An error occured. Please, try again later");
      });
  };

  useEffect(() => {
    if (isSuccess) {
      if (cropsData) {
        const items = cropsData as Crop[];

        setCrops(items);
      } else {
        setCrops([]);
        setCrop(undefined);
      }
    } else {
      setCrops([]);
      setCrop(undefined);
    }
  }, [isSuccess, cropsData]);

  useEffect(() => {
    dispatch(storeSelectedOption(option));
  }, [option]);

  useEffect(() => {
    const filteredCrops = crops.filter((cropItem) =>
      selectedOption?.value === "planted"
        ? cropItem.isPlanted
        : selectedOption?.value === "to-plant"
        ? !cropItem.isPlanted
        : true
    );

    const filteredCrop = filteredCrops.find(
      (cropItem) => selectedCropId === cropItem._id
    );

    if (filteredCrop) {
      setCrop(filteredCrop);
    } else {
      if (0 < filteredCrops.length) {
        setCrop(filteredCrops[0]);
      } else {
        setCrop(undefined);
      }
    }
  }, [crops, selectedOption, selectedCropId]);

  const generatedProps: YourCropGeneratedProps = {
    isLoading,
    option: selectedOption,
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
    isModalVisible,
    setIsModalVisible,
  };
  return <YourCropView {...generatedProps} />;
};

export default YourCrop;
