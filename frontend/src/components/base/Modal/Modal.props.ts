import { HTMLAttributes, ReactNode } from "react";

export interface ModalProps extends HTMLAttributes<HTMLElement> {
  isOpen: boolean;
  uncloseable?: boolean;
  onClose: () => void;
  onBack?: () => void;
  padded?: boolean;
  children: ReactNode;
}
