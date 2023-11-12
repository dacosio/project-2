import { Dispatch, SetStateAction } from "react";

export interface AddSuggestionProps {
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  onLater: (isError: boolean) => void;
  onNow: (isError: boolean) => void;
}
