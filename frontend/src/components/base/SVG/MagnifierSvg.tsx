import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const MagnifierSvg = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 22}
      height={height || 22}
      fill={fill || "none"}
      viewBox="0 0 22 22"
    >
      <path
        fill={fill || "#95959B"}
        d="M20.796 19.204l-4.452-4.454a8.636 8.636 0 10-1.594 1.594l4.456 4.457a1.126 1.126 0 101.594-1.594l-.004-.003zM3.125 9.5A6.375 6.375 0 119.5 15.875 6.382 6.382 0 013.125 9.5z"
      ></path>
    </svg>
  );
};

export default MagnifierSvg;
