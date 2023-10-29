import { Dispatch, SetStateAction } from "react";

export interface AddChoiceModalProps {
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
}
