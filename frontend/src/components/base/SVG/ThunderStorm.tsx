import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const ThunderStorm = (props: SVGProps): JSX.Element => {
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
      viewBox="0 0 211 207"
    >
      <path
        fill="url(#paint0_linear_2199_18227)"
        d="M111.608 206.43l-30.589-58.253h18.893v-43.859l30.139 59.153h-18.443v42.959z"
      ></path>
      <g filter="url(#filter0_bdi_2199_18227)">
        <path
          fill="url(#paint1_radial_2199_18227)"
          fillOpacity="0.77"
          fillRule="evenodd"
          d="M51.941 142.29c-.28.006-.561.009-.843.009-20.976 0-37.98-17.005-37.98-37.981 0-14.235 7.83-26.64 19.42-33.144a64.095 64.095 0 01-.009-1.04c0-34.726 28.152-62.878 62.88-62.878 29.954 0 55.017 20.946 61.339 48.991 22.92.964 41.206 19.85 41.206 43.006 0 23.773-19.272 43.045-43.044 43.045-.282 0-.563-.003-.843-.008v.006H51.941v-.006z"
          clipRule="evenodd"
        ></path>
      </g>
      <g
        style={{ mixBlendMode: "soft-light" }}
        filter="url(#filter1_di_2199_18227)"
      >
        <circle cx="51.096" cy="104.318" r="37.981" fill="#848484"></circle>
      </g>
      <defs>
        <filter
          id="filter0_bdi_2199_18227"
          width="210.461"
          height="160.666"
          x="0.306"
          y="0.85"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImageFix"
            stdDeviation="3.203"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2199_18227"
          ></feComposite>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="6.406"></feOffset>
          <feGaussianBlur stdDeviation="6.406"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.2015 0 0 0 0 0.3875 0 0 0 0.2 0"></feColorMatrix>
          <feBlend
            in2="effect1_backgroundBlur_2199_18227"
            result="effect2_dropShadow_2199_18227"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_2199_18227"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="0.4" dy="0.801"></feOffset>
          <feGaussianBlur stdDeviation="2.803"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
          <feBlend
            in2="shape"
            result="effect3_innerShadow_2199_18227"
          ></feBlend>
        </filter>
        <filter
          id="filter1_di_2199_18227"
          width="87.972"
          height="87.171"
          x="9.912"
          y="59.932"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="-0.801" dy="-4.004"></feOffset>
          <feGaussianBlur stdDeviation="1.201"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2199_18227"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2199_18227"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="8.808" dy="4.804"></feOffset>
          <feGaussianBlur stdDeviation="4.404"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.74 0"></feColorMatrix>
          <feBlend
            in2="shape"
            result="effect2_innerShadow_2199_18227"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear_2199_18227"
          x1="105.535"
          x2="105.31"
          y1="104.318"
          y2="191.586"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.318" stopColor="#F45225"></stop>
          <stop offset="0.724" stopColor="#FBB823"></stop>
          <stop offset="0.885" stopColor="#FDE133"></stop>
          <stop offset="1" stopColor="#FFF696"></stop>
        </linearGradient>
        <radialGradient
          id="paint1_radial_2199_18227"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-1.24057 106.19475 -121.17973 -1.41562 78.244 36.05)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#99CEFF"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

export default ThunderStorm;
