import { ReactNode } from "react";

export interface MobileDrawerProps {
    direction: 
          "right" 
        | "left" 
        | "top" 
        | "bottom";
    children?: ReactNode;
    isOpenDrawer: boolean;
    handleDrawerClose: () => void;
}
