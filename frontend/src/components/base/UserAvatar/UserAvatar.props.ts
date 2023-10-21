import { CSSProperties } from "@emotion/serialize";

export interface UserAvatarProps {
  email: string;
  displayName?: string;
  size: string;
  imageUrl?: string;
  style?: CSSProperties;
  round?: boolean | string | undefined;
  onClick?: () => void;
}
