export type Crop = {
  id: string;
  name: string;
  isPlanted: boolean;
};

export interface CropDetailProps {
  crop: Crop;
  handleOnFavorite: (id: string) => void;
  handleOnDelete: (id: string) => void;
}
