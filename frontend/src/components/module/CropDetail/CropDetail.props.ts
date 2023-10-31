import { Crop } from "../../../types/store/CropState";

export interface CropDetailProps {
  crop: Crop;
  handlePlant: (id: string) => void;
  handleFavorite: (id: string, isFavorite: boolean) => void;
  handleOnDelete: (id: string) => void;
}
