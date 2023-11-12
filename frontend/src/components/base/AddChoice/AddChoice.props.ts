import { Dispatch, SetStateAction } from "react";

export interface AddChoiceProps {
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  onLater: (isError: boolean) => void;
  onNow: (isError: boolean) => void;
}
