import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const LocationSvg = (props: SVGProps): JSX.Element => {
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
      {...props}
    >
      <path
        fill={fill || "#AFAFB7"}
        d="M12 13.5A3.75 3.75 0 1 1 12 6a3.75 3.75 0 0 1 0 7.5Zm0-6a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
      />
      <path
        fill={fill || "#AFAFB7"}
        d="m12 22.5-6.327-7.462a25.635 25.635 0 0 1-.261-.338A8.167 8.167 0 0 1 3.75 9.75a8.25 8.25 0 1 1 16.5 0 8.164 8.164 0 0 1-1.661 4.948l-.001.002s-.225.296-.259.335L12 22.5Zm-5.391-8.704c.002 0 .176.231.215.28L12 20.182l5.183-6.113c.032-.04.208-.273.209-.274A6.676 6.676 0 0 0 18.75 9.75a6.75 6.75 0 0 0-13.5 0 6.678 6.678 0 0 0 1.359 4.046Z"
      />
    </svg>
  );
};

export default LocationSvg;
