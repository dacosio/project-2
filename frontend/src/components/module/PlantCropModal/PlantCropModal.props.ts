import { Dispatch, SetStateAction } from "react";

export interface PlantCropModalProps {
  adding?: boolean;
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  cropId: string;
  cropName: string;
  onLoading?: (isLoading: boolean) => void;
  onConfirm: (isError: boolean) => void;
}
