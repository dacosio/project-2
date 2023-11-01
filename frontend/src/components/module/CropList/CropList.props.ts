import { Dispatch, SetStateAction } from "react";
import { Crop } from "../../../types/store/CropState";

export type Option = {
  value: string;
  label: string;
};

export interface CropListProps {
  crops: Crop[];
  crop?: Crop;
  options: Option[];
  option: Option | undefined;
  setOption: Dispatch<SetStateAction<Option | undefined>>;
  handleOnClickCrop: (id: string) => void;
  handleOnClickChoice: () => void;
  handleOnClickSuggestion: () => void;
}
