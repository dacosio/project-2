import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const ThreeDots = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "22"}
      height={height || "6"}
      fill="none"
      viewBox="0 0 22 6"
      style={{ cursor: "pointer" }}
    >
      <path
        fill={fill || "#A8A8BD"}
        d="M11 .375a2.625 2.625 0 110 5.25 2.625 2.625 0 010-5.25zM6.125 3a2.625 2.625 0 10-5.25 0 2.625 2.625 0 005.25 0zm9.75 0a2.625 2.625 0 105.25 0 2.625 2.625 0 00-5.25 0z"
      ></path>
    </svg>
  );
};

export default ThreeDots;
