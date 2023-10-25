import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const RainInactive = (props: SVGProps): JSX.Element => {
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
      viewBox="0 0 214 201"
    >
      <path
        fill="#C5E5F7"
        d="M59.465 108.508a6.777 6.777 0 1113.553 0v50.679a6.777 6.777 0 11-13.553 0v-50.679zM86.572 117.937a6.777 6.777 0 1113.554 0v61.286a6.777 6.777 0 11-13.554 0v-61.286zM113.68 103.205a6.777 6.777 0 1113.553 0v44.786a6.777 6.777 0 01-13.553 0v-44.786zM140.787 103.205a6.777 6.777 0 1113.554 0v55.982a6.777 6.777 0 11-13.554 0v-55.982zM140.787 178.634a6.777 6.777 0 1113.554 0v15.321a6.777 6.777 0 11-13.554 0v-15.321zM113.68 169.205a6.777 6.777 0 1113.553 0v18.857a6.777 6.777 0 11-13.553 0v-18.857zM59.465 182.169a6.777 6.777 0 0113.553 0v5.893a6.777 6.777 0 11-13.553 0v-5.893z"
      ></path>
      <g filter="url(#filter0_bdi_2496_19342)">
        <path
          fill="url(#paint0_radial_2496_19342)"
          fillOpacity="0.77"
          d="M52.448 144.204c-.285.006-.57.009-.857.009-21.313 0-38.591-17.277-38.591-38.591 0-14.463 7.957-27.069 19.733-33.677a65.075 65.075 0 01-.009-1.056C32.724 35.604 61.328 7 96.614 7c30.436 0 55.902 21.283 62.325 49.78 23.289.978 41.868 20.167 41.868 43.696 0 24.155-19.581 43.737-43.736 43.737-.286 0-.572-.003-.856-.009v.007H52.448v-.007z"
        ></path>
      </g>
      <g
        style={{ mixBlendMode: "soft-light" }}
        filter="url(#filter1_di_2496_19342)"
      >
        <path
          fill="#848484"
          d="M90.182 105.622c0 21.313-17.278 38.591-38.591 38.591-21.313 0-38.591-17.278-38.591-38.591 0-21.313 17.278-38.59 38.59-38.59 21.314 0 38.592 17.277 38.592 38.59z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_bdi_2496_19342"
          width="213.429"
          height="162.836"
          x="0.189"
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
            result="effect1_backgroundBlur_2496_19342"
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
            in2="effect1_backgroundBlur_2496_19342"
            result="effect2_dropShadow_2496_19342"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_2496_19342"
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
            result="effect3_innerShadow_2496_19342"
          ></feBlend>
        </filter>
        <filter
          id="filter1_di_2496_19342"
          width="89.192"
          height="88.392"
          x="9.797"
          y="60.626"
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
            result="effect1_dropShadow_2496_19342"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2496_19342"
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
            result="effect2_innerShadow_2496_19342"
          ></feBlend>
        </filter>
        <radialGradient
          id="paint0_radial_2496_19342"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(90.669 21.67 57.255) scale(107.908 123.135)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#99CEFF"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

export default RainInactive;
