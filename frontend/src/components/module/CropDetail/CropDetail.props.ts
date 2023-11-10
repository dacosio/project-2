import { Crop } from "../../../types/store/CropState";

export interface CropDetailProps {
  crop: Crop;
  onConfirm: (isError: boolean) => void;
  handleFavorite: (id: string, isFavorite: boolean) => void;
  onDelete: (id: string) => void;
}
