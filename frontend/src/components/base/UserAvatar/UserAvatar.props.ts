import { CSSProperties } from "@emotion/serialize";

export interface UserAvatarProps {
  email: string;
  displayName?: string;
  size: string;
  imageUrl?: string;
  style?: CSSProperties;
}
