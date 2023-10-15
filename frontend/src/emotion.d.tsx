import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    brand: {
      primary: string;
      secondary: string;
      accent: string;
      invert: string;
      info: string;
      alert: string;
      success: string;
      warning: string;
      error: string;
      green: string;
    };
    grey: {
      shade1: string;
      shade2: string;
      shade3: string;
      shade5: string;
      shade6: string;
      shade7: string;
      shade8: string;
      shade9: string;
      noshade: string;
    };
    neutral: {
      n100: string;
      n90: string;
      n80: string;
      n70: string;
      n60: string;
      n50: string;
      n40: string;
      n30: string;
      n20: string;
      n10: string;
      n0: string;
    };
    text: {
      primary: string;
      secondary: string;
      accent: string;
      invert: string;
      disabled: string;
    };
    bg: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    };
    btn: {
      text: {
        primary: string;
        secondary: string;
        accent: string;
        invert: string;
        disabled: string;
        disabledToken: string;
        white: string;
      };
      color: {
        primary: string;
        hover: string;
        pressed: string;
        disabled: string;
        outline: string;
        outlineBg: string;
        light: string;
        lightest: string;
        token: string;
        tokenHover: string;
        tokenPressed: string;
      };
    };
    prog: {
      quarter: string;
      half: string;
      full: string;
    };
  }
}
