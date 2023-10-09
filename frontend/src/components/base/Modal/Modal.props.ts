import { HTMLAttributes, ReactNode } from 'react';



export interface ModalProps extends HTMLAttributes<HTMLElement> {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
