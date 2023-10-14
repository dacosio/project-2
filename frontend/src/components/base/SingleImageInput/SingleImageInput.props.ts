import { Dispatch, HTMLAttributes } from "react";
import { ImageType } from "react-images-uploading";

export type Sizing = "mobile" | "desktop";

export interface SingleImageInputProps extends HTMLAttributes<HTMLDivElement> {
  sizing?: Sizing;
  image: ImageType | undefined;
  setImage: Dispatch<React.SetStateAction<ImageType>>;
}
