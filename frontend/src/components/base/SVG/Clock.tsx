import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const Clock = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 28}
      height={height || 28}
      fill="none"
      {...props}
    >
      <path
        fill="#57CB62"
        d="M25.375 14a11.375 11.375 0 1 1-22.75 0 11.375 11.375 0 0 1 22.75 0ZM0 14a14 14 0 1 0 28 0 14 14 0 0 0-28 0Zm12.688-7.438V14c0 .438.218.848.585 1.094l5.25 3.5a1.31 1.31 0 0 0 1.82-.367 1.308 1.308 0 0 0-.366-1.82L15.312 13.3V6.562A1.31 1.31 0 0 0 14 5.25a1.31 1.31 0 0 0-1.313 1.313Z"
      />
    </svg>
  );
};

export default Clock;
