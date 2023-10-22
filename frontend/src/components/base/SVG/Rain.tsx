import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const Rain = (props: SVGProps): JSX.Element => {
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
      viewBox="0 0 214 201"
    >
      <path
        fill="url(#paint0_linear_2455_18670)"
        d="M59.29 108.69a6.777 6.777 0 1113.553 0v50.679a6.777 6.777 0 11-13.554 0V108.69z"
      ></path>
      <path
        fill="url(#paint1_linear_2455_18670)"
        d="M86.396 118.118a6.777 6.777 0 0113.554 0v61.287a6.777 6.777 0 01-13.554 0v-61.287z"
      ></path>
      <path
        fill="url(#paint2_linear_2455_18670)"
        d="M113.504 103.386a6.777 6.777 0 0113.553 0v44.786a6.777 6.777 0 11-13.553 0v-44.786z"
      ></path>
      <path
        fill="url(#paint3_linear_2455_18670)"
        d="M140.611 103.386a6.777 6.777 0 0113.554 0v55.983a6.777 6.777 0 11-13.554 0v-55.983z"
      ></path>
      <path
        fill="url(#paint4_linear_2455_18670)"
        d="M140.611 178.815a6.777 6.777 0 016.777-6.776 6.777 6.777 0 016.777 6.776v15.322a6.777 6.777 0 11-13.554 0v-15.322z"
      ></path>
      <path
        fill="url(#paint5_linear_2455_18670)"
        d="M113.504 169.387a6.777 6.777 0 1113.553 0v18.857a6.777 6.777 0 11-13.553 0v-18.857z"
      ></path>
      <path
        fill="url(#paint6_linear_2455_18670)"
        d="M59.29 182.351a6.777 6.777 0 1113.553 0v5.893a6.777 6.777 0 11-13.554 0v-5.893z"
      ></path>
      <g filter="url(#filter0_bdi_2455_18670)">
        <path
          fill="url(#paint7_radial_2455_18670)"
          fillOpacity="0.77"
          d="M52.272 144.386c-.285.006-.57.009-.857.009-21.313 0-38.59-17.278-38.59-38.591 0-14.464 7.956-27.07 19.732-33.677a65.065 65.065 0 01-.009-1.056c0-35.285 28.605-63.89 63.89-63.89 30.436 0 55.902 21.284 62.326 49.78 23.288.979 41.867 20.168 41.867 43.697 0 24.155-19.581 43.736-43.736 43.736-.286 0-.571-.003-.856-.008v.006H52.272v-.006z"
        ></path>
      </g>
      <g
        style={{ mixBlendMode: "soft-light" }}
        filter="url(#filter1_di_2455_18670)"
      >
        <path
          fill="#848484"
          d="M90.006 105.804c0 21.313-17.278 38.591-38.59 38.591-21.314 0-38.592-17.278-38.592-38.591 0-21.313 17.278-38.591 38.591-38.591 21.313 0 38.591 17.278 38.591 38.591z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_bdi_2455_18670"
          width="213.429"
          height="162.836"
          x="0.013"
          y="0.776"
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
            result="effect1_backgroundBlur_2455_18670"
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
            in2="effect1_backgroundBlur_2455_18670"
            result="effect2_dropShadow_2455_18670"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_2455_18670"
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
            result="effect3_innerShadow_2455_18670"
          ></feBlend>
        </filter>
        <filter
          id="filter1_di_2455_18670"
          width="89.192"
          height="88.392"
          x="9.621"
          y="60.807"
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
            result="effect1_dropShadow_2455_18670"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2455_18670"
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
            result="effect2_innerShadow_2455_18670"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear_2455_18670"
          x1="106.727"
          x2="106.606"
          y1="96.609"
          y2="185.751"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.318" stopColor="#3675D7"></stop>
          <stop offset="0.724" stopColor="#25CDF4"></stop>
          <stop offset="0.885" stopColor="#7CDEE9"></stop>
          <stop offset="1" stopColor="#67EBF7"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_2455_18670"
          x1="106.727"
          x2="106.606"
          y1="96.609"
          y2="185.751"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.318" stopColor="#3675D7"></stop>
          <stop offset="0.724" stopColor="#25CDF4"></stop>
          <stop offset="0.885" stopColor="#7CDEE9"></stop>
          <stop offset="1" stopColor="#67EBF7"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_2455_18670"
          x1="106.727"
          x2="106.606"
          y1="96.609"
          y2="185.751"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.318" stopColor="#3675D7"></stop>
          <stop offset="0.724" stopColor="#25CDF4"></stop>
          <stop offset="0.885" stopColor="#7CDEE9"></stop>
          <stop offset="1" stopColor="#67EBF7"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_2455_18670"
          x1="106.727"
          x2="106.606"
          y1="96.609"
          y2="185.751"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.318" stopColor="#3675D7"></stop>
          <stop offset="0.724" stopColor="#25CDF4"></stop>
          <stop offset="0.885" stopColor="#7CDEE9"></stop>
          <stop offset="1" stopColor="#67EBF7"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_2455_18670"
          x1="106.727"
          x2="106.606"
          y1="96.609"
          y2="185.751"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.318" stopColor="#3675D7"></stop>
          <stop offset="0.724" stopColor="#25CDF4"></stop>
          <stop offset="0.885" stopColor="#7CDEE9"></stop>
          <stop offset="1" stopColor="#67EBF7"></stop>
        </linearGradient>
        <linearGradient
          id="paint5_linear_2455_18670"
          x1="106.727"
          x2="106.606"
          y1="96.609"
          y2="185.751"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.318" stopColor="#3675D7"></stop>
          <stop offset="0.724" stopColor="#25CDF4"></stop>
          <stop offset="0.885" stopColor="#7CDEE9"></stop>
          <stop offset="1" stopColor="#67EBF7"></stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear_2455_18670"
          x1="106.727"
          x2="106.606"
          y1="96.609"
          y2="185.751"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.318" stopColor="#3675D7"></stop>
          <stop offset="0.724" stopColor="#25CDF4"></stop>
          <stop offset="0.885" stopColor="#7CDEE9"></stop>
          <stop offset="1" stopColor="#67EBF7"></stop>
        </linearGradient>
        <radialGradient
          id="paint7_radial_2455_18670"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(90.669 21.492 57.259) scale(107.908 123.135)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#99CEFF"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Rain;
