import { Option } from "components/base/Tab/Tab.props";
import { Dispatch, SetStateAction } from "react";

export interface YourCropGeneratedProps {
  options: Option[];
  value: string | undefined;
  setValue: Dispatch<SetStateAction<string | undefined>>;
  crops: { name: string; isPlanted: boolean }[];
}
