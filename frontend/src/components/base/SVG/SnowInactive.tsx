import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const SnowInactive = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 30}
      height={height || 30}
      fill="none"
      viewBox="0 0 218 189"
    >
      <g filter="url(#filter0_bdi_2496_19232)">
        <path
          fill="url(#paint0_radial_2496_19232)"
          fillOpacity="0.77"
          fillRule="evenodd"
          d="M53.276 147.08c-.29.007-.582.01-.875.01-21.76 0-39.4-17.64-39.4-39.4 0-14.768 8.124-27.637 20.146-34.384a66.454 66.454 0 01-.008-1.076C33.139 36.204 62.343 7 98.369 7 129.442 7 155.441 28.729 162 57.821c23.777 1 42.747 20.591 42.747 44.614 0 24.662-19.992 44.654-44.654 44.654-.292 0-.583-.003-.874-.008v.008H53.276v-.009z"
          clipRule="evenodd"
        ></path>
      </g>
      <g
        style={{ mixBlendMode: "soft-light" }}
        filter="url(#filter1_di_2496_19232)"
      >
        <circle cx="52.4" cy="107.69" r="39.4" fill="#848484"></circle>
      </g>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="3"
        d="M109.053 106.564L109.053 186.743"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="3"
        d="M99.674 112.945l9.631 9.632 8.756-9.632M118.062 184.74l-9.632-9.631-8.755 9.631M104.93 127.832l4.378 4.378 4.377-4.378M112.805 170.734l-4.378-4.377-4.378 4.377"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="3"
        d="M148.959 146.84L68.78 146.84"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="3"
        d="M142.58 137.459l-9.631 9.631 9.631 8.756M70.784 155.848l9.631-9.632-9.63-8.755M127.693 142.715l-4.377 4.378 4.377 4.377M84.794 150.592l4.378-4.378-4.378-4.378"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="3"
        d="M137.329 117.696L80.634 174.39"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="3"
        d="M125.942 116.449v13.621l13.002-.619M88.296 179.484v-13.62l-13.002.619M119.815 129.58v6.191h6.192M95.302 166.357v-6.191H89.11"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="3"
        d="M137.837 175.107L81.142 118.412"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="3"
        d="M139.085 163.725h-13.621l.619 13.001M76.042 126.074h13.62l-.619-13.001M125.947 157.596h-6.191v6.191M89.174 133.078h6.191v-6.191"
      ></path>
      <defs>
        <filter
          id="filter0_bdi_2496_19232"
          width="217.37"
          height="165.713"
          x="0.19"
          y="0.594"
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
            result="effect1_backgroundBlur_2496_19232"
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
            in2="effect1_backgroundBlur_2496_19232"
            result="effect2_dropShadow_2496_19232"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_2496_19232"
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
            result="effect3_innerShadow_2496_19232"
          ></feBlend>
        </filter>
        <filter
          id="filter1_di_2496_19232"
          width="90.811"
          height="90.011"
          x="9.797"
          y="61.883"
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
            result="effect1_dropShadow_2496_19232"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2496_19232"
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
            result="effect2_innerShadow_2496_19232"
          ></feBlend>
        </filter>
        <radialGradient
          id="paint0_radial_2496_19232"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(90.669 22.06 58.248) scale(110.171 125.719)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#99CEFF"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

export default SnowInactive;
