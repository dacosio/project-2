import { useEffect, useRef, useState } from "react";

import YourCropView from "./YourCrop.view";
import { YourCropGeneratedProps } from "./YourCrop.props";
import {
  useFavoriteMutation,
  useGetPlantedCropsQuery,
  usePlantNowMutation,
  useRemoveCropMutation,
} from "../../../features/crops/cropApiSlice";
import { Crop } from "../../../types/store/CropState";
import { Option } from "../../../components/base/Tab/Tab.props";
import toast from "react-hot-toast";
import { useOnClickOutside } from "../../../utils/hooks/useOnClickOutside";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectSelectedCropId,
  storeSelectedCropId,
} from "../../../features/crops/cropSlice";

const YourCrop = (): JSX.Element => {
  const popupRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(popupRef, (event: MouseEvent) => {
    setPopupVisibility(false);
  });

  const dispatch = useAppDispatch();

  const selectedCropId = useAppSelector(selectSelectedCropId);

  const [option, setOption] = useState<Option | undefined>({
    value: "all",
    label: "All",
  });
  const [crops, setCrops] = useState<Crop[]>([]);
  const [crop, setCrop] = useState<Crop | undefined>(undefined);
  const [popupVisibility, setPopupVisibility] = useState<boolean>(false);
  const [choiceVisibility, setChoiceVisibility] = useState<boolean>(false);
  const [suggestionVisibility, setSuggestionVisibility] =
    useState<boolean>(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  const [plantNow] = usePlantNowMutation();
  const [favorite] = useFavoriteMutation();
  const [removeCrop] = useRemoveCropMutation();
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
      .then(() => toast.success("Crop successfully planted"))
      .catch(() => {
        toast.error("An error occured. Please, try again later");
      });
  };

  const handleFavorite = async (id: string, isFavorite: boolean) => {
    await favorite({ id, isFavorite })
      .then(() =>
        isFavorite
          ? toast.success("Crop successfully added to favorite list")
          : toast.success("Crop successfully removed from favorite list")
      )
      .catch(() => {
        toast.error("An error occured. Please, try again later");
      });
  };

  const handleOnDelete = async (id: string) => {
    await removeCrop({ id })
      .then(() => {
        toast.success("Crop successfully removed");
        dispatch(storeSelectedCropId(""));
      })
      .catch(() => {
        toast.error("An error occured. Please, try again later");
      });
  };

  useEffect(() => {
    if (cropsData) {
      const items = cropsData as Crop[];

      setCrops(items);

      if (!selectedCropId) {
        if (items && 0 < items.length) {
          dispatch(storeSelectedCropId(items[0]._id));
        }
      }
    }
  }, [cropsData]);

  useEffect(() => {
    setCrop(crops.find((crop) => selectedCropId === crop._id));
  }, [crops, selectedCropId]);

  const generatedProps: YourCropGeneratedProps = {
    popupRef,
    popupVisibility,
    setPopupVisibility,
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
