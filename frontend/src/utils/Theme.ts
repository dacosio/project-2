// import { Theme } from "../types/Theme";
import { useTheme as useThemeBase } from "@emotion/react";
import { Theme } from "@emotion/react";
export const useTheme = (): Theme => useThemeBase();

const rootFontSizePx = 16;
export const pxToRem = (n: number): string => `${n / rootFontSizePx}rem`;

export const theme: Theme = {
  brand: {
    primary: "#E35D32",
    secondary: "#B6B4CA",
    info: "#1877F2",
    alert: "#FFCF5C",
    success: "#00C48C",
    warning: "#FFA26B",
    error: "#F23742",
  },
  grey: {
    shade1: "#F9FAFF",
    shade2: "#EDEFFA",
    shade3: "#E5E9F5",
    shade5: "#BBC2DC",
    shade6: "#7F8498",
    shade7: "#565A6A",
    shade8: "#111E2B",
    shade9: "#09131D",
    noshade: "#FFFFFF",
  },
};

export default theme;
