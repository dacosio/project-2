import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const WeatherAlertSVG = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || 24}
      fill="none"
      viewBox="0 0 31 31"
    >
      <path
        fill="#FF4D03"
        d="M17.178 4.066L28.33 23.382a1.938 1.938 0 01-1.678 2.906H4.348a1.937 1.937 0 01-1.678-2.906L13.822 4.066c.745-1.291 2.61-1.291 3.356 0zM15.5 6.326L5.466 23.706h20.067L15.5 6.327zm0 13.05a1.291 1.291 0 110 2.582 1.291 1.291 0 010-2.583zm0-9.042a1.292 1.292 0 011.291 1.291v5.167a1.292 1.292 0 01-2.583 0v-5.167a1.292 1.292 0 011.292-1.291z"
      ></path>
    </svg>
  );
};

export default WeatherAlertSVG;
