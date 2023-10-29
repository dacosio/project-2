import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const Favorite = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      width={width || 16}
      height={height || 16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2662_9628)">
        <path
          d="M8 1.75L9.93125 5.6625L14.25 6.29375L11.125 9.3375L11.8625 13.6375L8 11.6063L4.1375 13.6375L4.875 9.3375L1.75 6.29375L6.06875 5.6625L8 1.75Z"
          stroke="#31B03D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2662_9628">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Favorite;
