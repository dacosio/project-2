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
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || 24}
      fill="#C5E5F7"
      viewBox="0 0 186 182"
    >
      <g filter="url(#filter0_i_2455_18656)">
        <path
          fill="#FFAB0B"
          d="M153.311 91.36c0 32.258-26.796 58.408-59.85 58.408-33.055 0-59.85-26.15-59.85-58.407 0-32.258 26.795-58.408 59.85-58.408 33.054 0 59.85 26.15 59.85 58.408z"
        ></path>
      </g>
      <path
        fill="#FFE200"
        fillRule="evenodd"
        d="M92.997.55h.106c5.523.004 9.998 4.483 9.995 10.006-.003 5.523-4.483 9.998-10.006 9.995h-.084c-5.523.003-10.002-4.472-10.005-9.995C83 5.033 87.474.554 92.997.551zm32.107 15.662c2.688-4.824 8.778-6.557 13.602-3.869l.093.052c4.821 2.693 6.547 8.785 3.854 13.607-2.694 4.821-8.786 6.546-13.607 3.853l-.073-.04c-4.825-2.688-6.557-8.778-3.869-13.603zm-64.107 0c2.687 4.825.955 10.915-3.87 13.603l-.072.04c-4.822 2.693-10.914.968-13.607-3.854-2.693-4.821-.968-10.913 3.854-13.606l.092-.052c4.825-2.688 10.915-.955 13.603 3.87zm98.027 25.556c4.734-2.845 10.877-1.314 13.722 3.42l.055.091c2.839 4.737 1.301 10.88-3.436 13.719-4.737 2.839-10.879 1.3-13.718-3.437l-.043-.07c-2.845-4.734-1.314-10.878 3.42-13.723zm-131.948 0c4.734 2.845 6.265 8.989 3.42 13.723l-.042.07c-2.84 4.737-8.982 6.276-13.719 3.437-4.737-2.84-6.275-8.982-3.436-13.719l.055-.09c2.845-4.735 8.989-6.266 13.722-3.42zM10.66 80.913c5.523.004 9.998 4.484 9.994 10.006v.084c.004 5.522-4.47 10.002-9.994 10.006-5.523.003-10.002-4.472-10.006-9.995v-.106c.004-5.523 4.483-9.998 10.006-9.995zm164.782 0c5.523-.003 10.003 4.472 10.006 9.995v.106c-.003 5.523-4.483 9.998-10.006 9.995-5.523-.004-9.997-4.484-9.994-10.006v-.084c-.003-5.522 4.471-10.002 9.994-10.005zM16.735 122.924c4.738-2.839 10.88-1.3 13.719 3.437l.042.071c2.845 4.733 1.314 10.877-3.42 13.722-4.733 2.845-10.877 1.314-13.722-3.42l-.055-.091c-2.839-4.737-1.3-10.879 3.436-13.719zm152.63 0c4.737 2.84 6.275 8.982 3.436 13.719l-.055.091c-2.845 4.734-8.988 6.265-13.722 3.42-4.734-2.845-6.265-8.989-3.42-13.722l.043-.071c2.839-4.737 8.981-6.276 13.718-3.437zM43.448 155.921c2.693-4.822 8.785-6.547 13.607-3.854l.072.04c4.825 2.688 6.557 8.778 3.87 13.603-2.688 4.825-8.778 6.557-13.603 3.869l-.092-.052c-4.822-2.693-6.547-8.785-3.854-13.606zm99.205 0c2.693 4.821.967 10.913-3.854 13.606l-.093.052c-4.824 2.688-10.914.956-13.602-3.869-2.688-4.825-.956-10.915 3.869-13.603l.073-.04c4.821-2.693 10.913-.968 13.607 3.854zm-59.65 15.445c.003-5.523 4.482-9.998 10.005-9.995h.084c5.523-.003 10.003 4.472 10.006 9.995.003 5.523-4.472 10.002-9.995 10.005h-.106c-5.523-.003-9.997-4.482-9.994-10.005z"
        clipRule="evenodd"
      ></path>
      <defs>
        <filter
          id="filter0_i_2455_18656"
          width="129.701"
          height="129.814"
          x="23.61"
          y="32.953"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="-10" dy="13"></feOffset>
          <feGaussianBlur stdDeviation="12"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.886275 0 0 0 0 0 0 0 0 0.9 0"></feColorMatrix>
          <feBlend
            in2="shape"
            result="effect1_innerShadow_2455_18656"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
};

export default Clear;
