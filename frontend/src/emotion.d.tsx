import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    brand: {
      primary: string;
      secondary: string;
      info: string;
      alert: string;
      success: string;
      warning: string;
      error: string;
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
      shade10: string;
    };
  }
}
