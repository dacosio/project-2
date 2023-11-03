export interface AddCropResultProps {
  suggested?: boolean;
  onLater: (isError: boolean) => void;
  onNow: (isError: boolean) => void;
}
