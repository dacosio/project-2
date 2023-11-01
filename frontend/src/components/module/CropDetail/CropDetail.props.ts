import { Crop } from "../../../types/store/CropState";

export interface CropDetailProps {
  crop: Crop;
  onConfirm: () => void;
  handleFavorite: (id: string, isFavorite: boolean) => void;
  handleOnDelete: (id: string) => void;
}
