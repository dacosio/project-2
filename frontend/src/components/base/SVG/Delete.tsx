import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const Delete = (props: SVGProps): JSX.Element => {
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
      <g clip-path="url(#clip0_2662_3677)">
        <path
          d="M2.375 4.25H3.625M3.625 4.25H13.625M3.625 4.25V13C3.625 13.3315 3.7567 13.6495 3.99112 13.8839C4.22554 14.1183 4.54348 14.25 4.875 14.25H11.125C11.4565 14.25 11.7745 14.1183 12.0089 13.8839C12.2433 13.6495 12.375 13.3315 12.375 13V4.25H3.625ZM5.5 4.25V3C5.5 2.66848 5.6317 2.35054 5.86612 2.11612C6.10054 1.8817 6.41848 1.75 6.75 1.75H9.25C9.58152 1.75 9.89946 1.8817 10.1339 2.11612C10.3683 2.35054 10.5 2.66848 10.5 3V4.25M6.75 7.375V11.125M9.25 7.375V11.125"
          stroke="#31B03D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2662_3677">
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

export default Delete;
