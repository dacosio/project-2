import { Dispatch, SetStateAction } from "react";

export interface AddSuggestionModalProps {
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
}
