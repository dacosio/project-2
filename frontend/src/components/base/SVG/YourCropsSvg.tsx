import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const YourCropsSvg = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill, stroke } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9.47977 18.5999L10.9198 22.6285M9.47977 18.5999L6.47977 17.8628M9.47977 18.5999L11.3141 16.1142M3.39406 1.66277L3.97692 3.27419M5.02263 13.8171L8.02263 14.5713L9.87406 12.0856M3.58263 9.78848L6.58263 10.5256L8.41692 8.05705M2.12549 5.75991L5.12549 6.49705L6.97692 4.01134M16.3026 17.5713L15.3426 21.4285M16.3026 17.5713L14.3655 15.4456M16.3026 17.5713L18.9941 16.6113M20.3141 1.37134L19.9369 2.9142M15.3255 11.5885L17.2455 13.7142L19.9541 12.7371M16.2855 7.73134L18.2055 9.85705L20.9141 8.87991M17.2455 3.87419L19.1655 5.99991L21.8741 5.02277"
        stroke={stroke || theme.btn.text.secondary}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default YourCropsSvg;
