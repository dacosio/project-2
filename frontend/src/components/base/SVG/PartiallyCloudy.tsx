import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const PartiallyCloudy = (props: SVGProps): JSX.Element => {
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
      viewBox="0 0 192 180"
    >
      <g filter="url(#filter0_i_2452_19840)">
        <path
          fill="#FFAB0B"
          d="M165.052 76.147c0 26.999-22.428 48.886-50.094 48.886-27.667 0-50.095-21.887-50.095-48.886 0-27 22.428-48.887 50.095-48.887 27.666 0 50.094 21.887 50.094 48.886z"
        ></path>
      </g>
      <path
        fill="#FFE200"
        fillRule="evenodd"
        d="M114.193.51a80.56 80.56 0 01.842 0 8 8 0 01-.084 16 62.815 62.815 0 00-.674 0 8 8 0 01-8.041-7.957A7.999 7.999 0 01114.193.51zM72.208 22.152a8 8 0 01-.269 11.31l-.479.463a8 8 0 11-11.168-11.457c.2-.196.402-.39.605-.584a8 8 0 0111.31.268zm84.813 0a8 8 0 0111.31-.268c.203.193.405.388.606.584a8 8 0 01-11.168 11.457 58.254 58.254 0 00-.48-.462 8 8 0 01-.268-11.31zM45.695 67.434a8 8 0 017.954 8.045 61.834 61.834 0 000 .667 8 8 0 01-16 .09 74.881 74.881 0 010-.847 8 8 0 018.046-7.955zm137.839 0a8 8 0 018.045 7.955l.001.255v.169l-.001.424a8 8 0 01-16-.09l.001-.211v-.123-.186l-.001-.148a8 8 0 017.955-8.045zM60.147 117.846a8 8 0 0111.313-.144l.48.462a8 8 0 01-11.042 11.579 81.431 81.431 0 01-.606-.584 8 8 0 01-.145-11.313zm108.934 0a8 8 0 01-.144 11.313c-.201.196-.403.39-.606.584a8 8 0 01-11.042-11.579l.48-.462a7.999 7.999 0 0111.312.144zm-62.845 25.227a8 8 0 018.198-7.957H114.758l.193-.001a8 8 0 01.084 16l-.421.001-.421-.001a8 8 0 01-7.957-8.042z"
        clipRule="evenodd"
      ></path>
      <g filter="url(#filter1_bdi_2452_19840)">
        <path
          fill="url(#paint0_radial_2452_19840)"
          fillOpacity="0.77"
          d="M45.937 160.557c-.238.005-.477.007-.716.007-17.795 0-32.221-14.425-32.221-32.221 0-12.076 6.644-22.601 16.476-28.118a54.98 54.98 0 01-.008-.881C29.468 69.883 53.351 46 82.812 46c25.413 0 46.675 17.77 52.038 41.562 19.444.818 34.957 16.84 34.957 36.485 0 20.168-16.349 36.517-36.517 36.517-.239 0-.477-.002-.715-.007v.005H45.937v-.005z"
        ></path>
      </g>
      <g
        style={{ mixBlendMode: "soft-light" }}
        filter="url(#filter2_di_2452_19840)"
      >
        <path
          fill="#848484"
          d="M77.442 128.344c0 17.795-14.426 32.221-32.221 32.221-17.795 0-32.221-14.426-32.221-32.221 0-17.795 14.426-32.221 32.221-32.221 17.795 0 32.221 14.426 32.221 32.221z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_i_2452_19840"
          width="110.189"
          height="110.773"
          x="54.863"
          y="27.26"
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
            result="effect1_innerShadow_2452_19840"
          ></feBlend>
        </filter>
        <filter
          id="filter1_bdi_2452_19840"
          width="182.429"
          height="140.187"
          x="0.189"
          y="39.594"
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
            result="effect1_backgroundBlur_2452_19840"
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
            in2="effect1_backgroundBlur_2452_19840"
            result="effect2_dropShadow_2452_19840"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_2452_19840"
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
            result="effect3_innerShadow_2452_19840"
          ></feBlend>
        </filter>
        <filter
          id="filter2_di_2452_19840"
          width="76.452"
          height="75.651"
          x="9.797"
          y="89.717"
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
            result="effect1_dropShadow_2452_19840"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2452_19840"
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
            result="effect2_innerShadow_2452_19840"
          ></feBlend>
        </filter>
        <radialGradient
          id="paint0_radial_2452_19840"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(90.669 -.68 68.943) scale(90.0967 102.81)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#99CEFF"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

export default PartiallyCloudy;
