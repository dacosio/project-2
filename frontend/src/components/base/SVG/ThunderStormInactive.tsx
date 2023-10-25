import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const ThunderStormInactive = (props: SVGProps): JSX.Element => {
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
      viewBox="0 0 211 207"
    >
      <path
        fill="#C5E5F7"
        d="M111.493 206.174l-30.589-58.253h18.893v-43.859l30.139 59.153h-18.443v42.959z"
      ></path>
      <g filter="url(#filter0_bdi_2496_19208)">
        <path
          fill="url(#paint0_radial_2496_19208)"
          fillOpacity="0.77"
          fillRule="evenodd"
          d="M51.825 142.034c-.28.006-.562.009-.843.009-20.976 0-37.981-17.005-37.981-37.981 0-14.235 7.831-26.64 19.42-33.144a64.107 64.107 0 01-.008-1.039C32.413 35.152 60.565 7 95.292 7c29.955 0 55.018 20.947 61.34 48.992 22.92.963 41.206 19.849 41.206 43.006 0 23.773-19.272 43.044-43.045 43.044-.281 0-.562-.002-.842-.008v.006H51.825v-.006z"
          clipRule="evenodd"
        ></path>
      </g>
      <g
        style={{ mixBlendMode: "soft-light" }}
        filter="url(#filter1_di_2496_19208)"
      >
        <circle cx="50.981" cy="104.063" r="37.981" fill="#848484"></circle>
      </g>
      <defs>
        <filter
          id="filter0_bdi_2496_19208"
          width="210.46"
          height="160.666"
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
            result="effect1_backgroundBlur_2496_19208"
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
            in2="effect1_backgroundBlur_2496_19208"
            result="effect2_dropShadow_2496_19208"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_2496_19208"
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
            result="effect3_innerShadow_2496_19208"
          ></feBlend>
        </filter>
        <filter
          id="filter1_di_2496_19208"
          width="87.972"
          height="87.171"
          x="9.797"
          y="59.676"
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
            result="effect1_dropShadow_2496_19208"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2496_19208"
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
            result="effect2_innerShadow_2496_19208"
          ></feBlend>
        </filter>
        <radialGradient
          id="paint0_radial_2496_19208"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-1.24057 106.19475 -121.17973 -1.41562 78.128 35.793)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#99CEFF"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

export default ThunderStormInactive;
