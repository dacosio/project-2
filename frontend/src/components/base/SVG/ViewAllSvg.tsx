import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const ViewAllSvg = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="10"
      fill="none"
      viewBox="0 0 14 10">
      <path
        stroke="#31B03D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.5 1.25h8.125M4.5 5h8.125M4.5 8.75h8.125m-11.25-7.5h.006M1.375 5h.006m-.006 3.75h.006"></path>
    </svg>
  );
};

export default ViewAllSvg;
