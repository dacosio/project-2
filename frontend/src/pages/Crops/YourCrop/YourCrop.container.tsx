import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import YourCropView from "./YourCrop.view";
import { YourCropGeneratedProps, Option } from "./YourCrop.props";
import {
  useFavoriteMutation,
  useGetPlantedCropsQuery,
  usePlantNowMutation,
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

  const [plantNow] = usePlantNowMutation();
  const [favorite] = useFavoriteMutation();
  const [removeCrop] = useRemoveCropMutation();
  const {
    data: cropsData,
    isSuccess,
    refetch,
  } = useGetPlantedCropsQuery({
    isPlanted:
      selectedOption?.value === "planted"
        ? true
        : selectedOption?.value === "to-plant"
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
    dispatch(storeSelectedCropId(id));
    handleDrawerOpen();
  };

  const handleOnClickChoice = () => {
    setChoiceVisibility(true);
  };

  const handleOnClickSuggestion = () => {
    setSuggestionVisibility(true);
  };

  const handleLater = () => {
    setChoiceVisibility(false);
    setSuggestionVisibility(false);
  };

  const handleNow = () => {
    setChoiceVisibility(false);
    setSuggestionVisibility(false);
  };

  const handlePlant = async (id: string) => {
    await plantNow({ id })
      .then(() => {
        toast.success("Crop successfully planted");
        setOption({
          value: "planted",
          label: "Planted",
        });
      })
      .catch(() => {
        toast.error("An error occured. Please, try again later");
      });
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
      }
    } else {
      setCrops([]);
    }
  }, [isSuccess, cropsData]);

  useEffect(() => {
    dispatch(storeSelectedOption(option));
  }, [option]);

  useEffect(() => {
    if (crops.find((crop) => selectedCropId === crop._id)) {
      setCrop(crops.find((crop) => selectedCropId === crop._id));
    } else {
      if (0 < crops.length) {
        setCrop(crops[0]);
      }
    }
  }, [crops, selectedCropId]);

  const generatedProps: YourCropGeneratedProps = {
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
  };
  return <YourCropView {...generatedProps} />;
};

export default YourCrop;
