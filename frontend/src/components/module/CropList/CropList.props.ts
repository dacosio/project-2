export type Crop = {
  id: string;
  name: string;
  isPlanted: boolean;
};

export interface CropListProps {
  crops: Crop[];
  handleOnClickCrop: (id: string) => void;
  handleOnCreateCrop: () => void;
}
