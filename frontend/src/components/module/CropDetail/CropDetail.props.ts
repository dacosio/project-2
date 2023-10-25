export type Crop = {
  id: string;
  name: string;
  isPlanted: boolean;
};

export interface CropDetailProps {
  crop: Crop;
  handlePlant: (id: string) => void;
  handleOnDelete: (id: string) => void;
}
