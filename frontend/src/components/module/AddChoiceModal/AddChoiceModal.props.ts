import { Dispatch, SetStateAction } from "react";

export interface AddChoiceModalProps {
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  onLater: (isError: boolean) => void;
  onNow: (isError: boolean) => void;
}
