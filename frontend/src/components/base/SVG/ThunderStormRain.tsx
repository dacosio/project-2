import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const ThunderStormRain = (props: SVGProps): JSX.Element => {
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
      viewBox="0 0 211 206"
    >
      <path
        fill="url(#paint0_linear_2496_18987)"
        d="M50.978 111.952a6.777 6.777 0 1113.554 0v50.679a6.777 6.777 0 01-13.553 0v-50.679z"
      ></path>
      <path
        fill="url(#paint1_linear_2496_18987)"
        d="M78.086 121.38a6.777 6.777 0 1113.554 0v61.286a6.777 6.777 0 11-13.554 0V121.38z"
      ></path>
      <path
        fill="url(#paint2_linear_2496_18987)"
        d="M105.193 106.648a6.777 6.777 0 1113.554 0v44.786a6.777 6.777 0 11-13.554 0v-44.786z"
      ></path>
      <path
        fill="url(#paint3_linear_2496_18987)"
        d="M132.301 106.648a6.776 6.776 0 1113.553 0v55.983a6.777 6.777 0 01-13.553 0v-55.983z"
      ></path>
      <path
        fill="url(#paint4_linear_2496_18987)"
        d="M132.301 182.077a6.777 6.777 0 1113.553 0v15.322a6.777 6.777 0 01-13.553 0v-15.322z"
      ></path>
      <path
        fill="url(#paint5_linear_2496_18987)"
        d="M105.193 172.648a6.777 6.777 0 016.777-6.776 6.777 6.777 0 016.777 6.776v18.858a6.777 6.777 0 11-13.554 0v-18.858z"
      ></path>
      <path
        fill="url(#paint6_linear_2496_18987)"
        d="M50.978 185.613a6.777 6.777 0 1113.554 0v5.893a6.777 6.777 0 11-13.553 0v-5.893z"
      ></path>
      <path
        fill="url(#paint7_linear_2496_18987)"
        d="M111.493 205.61l-30.589-58.253h18.893v-43.859l30.139 59.153h-18.443v42.959z"
      ></path>
      <g filter="url(#filter0_bdi_2496_18987)">
        <path
          fill="url(#paint8_radial_2496_18987)"
          fillOpacity="0.77"
          fillRule="evenodd"
          d="M51.826 141.469c-.28.006-.562.009-.843.009-20.976 0-37.981-17.004-37.981-37.98 0-14.235 7.831-26.641 19.42-33.145a64.095 64.095 0 01-.008-1.038c0-34.728 28.152-62.88 62.879-62.88 29.955 0 55.018 20.947 61.34 48.992 22.92.963 41.206 19.85 41.206 43.006 0 23.773-19.272 43.045-43.045 43.045-.281 0-.562-.003-.842-.008v.006H51.826v-.007z"
          clipRule="evenodd"
        ></path>
      </g>
      <g
        style={{ mixBlendMode: "soft-light" }}
        filter="url(#filter1_di_2496_18987)"
      >
        <circle cx="50.981" cy="103.498" r="37.981" fill="#848484"></circle>
      </g>
      <defs>
        <filter
          id="filter0_bdi_2496_18987"
          width="210.461"
          height="160.666"
          x="0.191"
          y="0.03"
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
            result="effect1_backgroundBlur_2496_18987"
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
            in2="effect1_backgroundBlur_2496_18987"
            result="effect2_dropShadow_2496_18987"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_2496_18987"
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
            result="effect3_innerShadow_2496_18987"
          ></feBlend>
        </filter>
        <filter
          id="filter1_di_2496_18987"
          width="87.972"
          height="87.171"
          x="9.797"
          y="59.112"
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
            result="effect1_dropShadow_2496_18987"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2496_18987"
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
            result="effect2_innerShadow_2496_18987"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear_2496_18987"
          x1="98.416"
          x2="98.295"
          y1="99.871"
          y2="189.013"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.318" stopColor="#3675D7"></stop>
          <stop offset="0.724" stopColor="#25CDF4"></stop>
          <stop offset="0.885" stopColor="#7CDEE9"></stop>
          <stop offset="1" stopColor="#67EBF7"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_2496_18987"
          x1="98.416"
          x2="98.295"
          y1="99.871"
          y2="189.013"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.318" stopColor="#3675D7"></stop>
          <stop offset="0.724" stopColor="#25CDF4"></stop>
          <stop offset="0.885" stopColor="#7CDEE9"></stop>
          <stop offset="1" stopColor="#67EBF7"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_2496_18987"
          x1="98.416"
          x2="98.295"
          y1="99.871"
          y2="189.013"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.318" stopColor="#3675D7"></stop>
          <stop offset="0.724" stopColor="#25CDF4"></stop>
          <stop offset="0.885" stopColor="#7CDEE9"></stop>
          <stop offset="1" stopColor="#67EBF7"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_2496_18987"
          x1="98.416"
          x2="98.295"
          y1="99.871"
          y2="189.013"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.318" stopColor="#3675D7"></stop>
          <stop offset="0.724" stopColor="#25CDF4"></stop>
          <stop offset="0.885" stopColor="#7CDEE9"></stop>
          <stop offset="1" stopColor="#67EBF7"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_2496_18987"
          x1="98.416"
          x2="98.295"
          y1="99.871"
          y2="189.013"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.318" stopColor="#3675D7"></stop>
          <stop offset="0.724" stopColor="#25CDF4"></stop>
          <stop offset="0.885" stopColor="#7CDEE9"></stop>
          <stop offset="1" stopColor="#67EBF7"></stop>
        </linearGradient>
        <linearGradient
          id="paint5_linear_2496_18987"
          x1="98.416"
          x2="98.295"
          y1="99.871"
          y2="189.013"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.318" stopColor="#3675D7"></stop>
          <stop offset="0.724" stopColor="#25CDF4"></stop>
          <stop offset="0.885" stopColor="#7CDEE9"></stop>
          <stop offset="1" stopColor="#67EBF7"></stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear_2496_18987"
          x1="98.416"
          x2="98.295"
          y1="99.871"
          y2="189.013"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.318" stopColor="#3675D7"></stop>
          <stop offset="0.724" stopColor="#25CDF4"></stop>
          <stop offset="0.885" stopColor="#7CDEE9"></stop>
          <stop offset="1" stopColor="#67EBF7"></stop>
        </linearGradient>
        <linearGradient
          id="paint7_linear_2496_18987"
          x1="105.42"
          x2="105.195"
          y1="103.498"
          y2="190.765"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.318" stopColor="#F45225"></stop>
          <stop offset="0.724" stopColor="#FBB823"></stop>
          <stop offset="0.885" stopColor="#FDE133"></stop>
          <stop offset="1" stopColor="#FFF696"></stop>
        </linearGradient>
        <radialGradient
          id="paint8_radial_2496_18987"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-1.24057 106.19475 -121.17973 -1.41562 78.13 35.229)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#99CEFF"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

export default ThunderStormRain;
