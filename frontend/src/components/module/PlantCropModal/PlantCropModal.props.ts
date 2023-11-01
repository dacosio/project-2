import { Dispatch, SetStateAction } from "react";

export interface PlantCropModalProps {
  isNew?: boolean;
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  cropId: string;
  cropName: string;
  onConfirm: () => void;
}
