import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const DrawerHandle = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 81}
      height={height || 4}
      fill="none"
      viewBox="0 0 81 4"
    >
      <rect
        width="4"
        height="80"
        x="0.5"
        y="4"
        fill="#AFAFB7"
        rx="2"
        transform="rotate(-90 .5 4)"
      ></rect>
    </svg>
  );
};

export default DrawerHandle;
