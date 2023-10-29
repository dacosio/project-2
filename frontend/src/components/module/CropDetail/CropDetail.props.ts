import { Crop } from "../../../types/store/CropState";

export interface CropDetailProps {
  crop: Crop;
  handlePlant: (id: string) => void;
  handleFavorite: (id: string) => void;
  handleOnDelete: (id: string) => void;
}
