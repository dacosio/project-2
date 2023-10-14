import { HTMLAttributes, ReactNode } from 'react';



export interface ModalProps extends HTMLAttributes<HTMLElement> {
  isOpen: boolean;
  onClose: () => void;
  onBack?: () => void; 
  children: ReactNode;
}