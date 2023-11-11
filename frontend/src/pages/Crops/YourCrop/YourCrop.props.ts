import { Dispatch, SetStateAction } from "react";
import { Crop } from "../../../types/store/CropState";

export type Option = {
  value: string;
  label: string;
};

export interface YourCropGeneratedProps {
  isLoading: boolean;
  option: Option | undefined;
  setOption: Dispatch<SetStateAction<Option | undefined>>;
  crops: Crop[];
  crop?: Crop;
  choiceVisibility: boolean;
  setChoiceVisibility: Dispatch<SetStateAction<boolean>>;
  suggestionVisibility: boolean;
  setSuggestionVisibility: Dispatch<SetStateAction<boolean>>;
  isOpenDrawer: boolean;
  handleOnClickCrop: (id: string) => void;
  handleOnClickChoice: () => void;
  handleOnClickSuggestion: () => void;
  handleLater: (isError: boolean) => void;
  handleNow: (isError: boolean) => void;
  handlePlant: (isError: boolean) => void;
  handleFavorite: (id: string, isFavorite: boolean) => void;
  handleOnDelete: (id: string) => void;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
  isModalVisible: boolean;
  setIsModalVisible: (newValue: boolean) => void;
}
