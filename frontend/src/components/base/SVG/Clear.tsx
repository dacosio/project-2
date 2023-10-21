import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const Clear = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      width={width || 30}
      height={height || 30}
      viewBox="0 0 182 178"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_2094_15929)">
        <ellipse
          cx="91.4042"
          cy="89.4661"
          rx="59.8505"
          ry="58.4075"
          fill="#FFAB0B"
        />
      </g>
      <ellipse
        cx="90.9936"
        cy="89.0665"
        rx="82.3969"
        ry="80.4103"
        stroke="#FFE200"
        stroke-width="16"
        stroke-linecap="round"
        stroke-dasharray="1 70"
      />
      <defs>
        <filter
          id="filter0_i_2094_15929"
          x="21.5537"
          y="31.0586"
          width="129.701"
          height="129.814"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-10" dy="13" />
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.886275 0 0 0 0 0 0 0 0 0.9 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_2094_15929"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Clear;
