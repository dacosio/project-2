import { Option } from "components/base/Tab/Tab.props";
import { Dispatch, SetStateAction } from "react";

export interface YourCropGeneratedProps {
  crops: { id: string; name: string; isPlanted: boolean }[];
  crop?: { id: string; name: string; isPlanted: boolean };
  isOpenDrawer: boolean;
  handleOnClickCrop: (id: string) => void;
  handleOnClickChoice: () => void;
  handleOnClickSuggestion: () => void;
  handlePlant: (id: string) => void;
  handleOnDelete: (id: string) => void;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
}
