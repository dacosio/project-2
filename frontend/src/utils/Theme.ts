// import { Theme } from "../types/Theme";
import { useTheme as useThemeBase } from "@emotion/react";
import { Theme } from "@emotion/react";
export const useTheme = (): Theme => useThemeBase();

const rootFontSizePx = 16;
export const pxToRem = (n: number): string => `${n / rootFontSizePx}rem`;

export const theme: Theme = {
  brand: {
    primary: "#222222",
    secondary: "#5B5B60",
    accent: "#57CB62",
    invert: "FFFFFF",
    info: "#1877F2",
    alert: "#FFCF5C",
    success: "#00C48C",
    warning: "#FFA26B",
    error: "#FF4D03",
    green: "#57CB62",
  },
  grey: {
    shade1: "#F9FAFF",
    shade2: "#EDEFFA",
    shade3: "#E5E9F5",
    shade5: "#BBC2DC",
    shade6: "#7F8498",
    shade7: "#565A6A",
    shade8: "#111E2B",
    shade9: "#222",
    noshade: "#FFFFFF",
  },
  neutral: {
    n100: "#0C0E15",
    n90: "#222222",
    n80: "#454549",
    n70: "#5B5B60",
    n60: "#66666A",
    n50: "#7C7C81",
    n40: "#95959B",
    n30: "#AFAFB7",
    n20: "#D1D1D9",
    n10: "#E7E7EB",
    n0: "#FFFFFF",
  },
  text: {
    primary: "#0C0E15",
    secondary: "#5B5B60",
    accent: "#57CB62",
    invert: "#FFFFFF",
    disabled: "#7C7C81",
  },
  bg: {
    primary: "#FFFFFF",
    secondary: "#EFEFEF",
    tertiary: "#F4F6F9",
    quaternary: "#F8F8F9",
  },
  btn: {
    text: {
      primary: "#0C0E15",
      secondary: "#5B5B60",
      accent: "#57CB62",
      invert: "#FCF1E0",
      disabled: "#7C7C81",
      disabledToken: "#AFAFB7",
      white: "#FFFFFF",
    },
    color: {
      primary: "#57CB62",
      hover: "#3FC24C",
      pressed: "#31B03D",
      disabled: "#D1D1D9",
      outline: "#31B03D",
      outlineBg: "#F0F5D2",
      light: "#E7E7EB",
      lightest: "#FCFFEB",
      token: "#6C57ED",
      tokenHover: "#1DAEFF",
      tokenPressed: "#242236",
    },
  },
  prog: {
    quarter: "#5DE3B3",
    half: "#78CFFF",
    full: "#6C57ED",
  },
};

export default theme;
