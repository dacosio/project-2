import { Option } from "components/base/Tab/Tab.props";
import { Dispatch, SetStateAction } from "react";
import { Crop } from "../../../types/store/CropState";

export interface YourCropGeneratedProps {
  ref: React.MutableRefObject<HTMLDivElement | null>;
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
  handleLater: () => void;
  handleNow: () => void;
  handlePlant: (id: string) => void;
  handleFavorite: (id: string, isFavorite: boolean) => void;
  handleOnDelete: (id: string) => void;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
}
