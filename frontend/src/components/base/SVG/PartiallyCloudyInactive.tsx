import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const PartiallyCloudyInactive = (props: SVGProps): JSX.Element => {
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
      viewBox="0 0 192 180"
    >
      <g filter="url(#filter0_i_2496_19225)">
        <path
          fill="#C5E5F7"
          d="M165.053 75.637c0 26.999-22.428 48.887-50.094 48.887-27.667 0-50.095-21.888-50.095-48.887 0-27 22.428-48.887 50.095-48.887 27.666 0 50.094 21.887 50.094 48.887z"
        ></path>
      </g>
      <path
        fill="#C5E5F7"
        fillRule="evenodd"
        d="M114.193.001a80.587 80.587 0 01.842 0 8 8 0 01-.084 16 62.815 62.815 0 00-.674 0 8 8 0 01-8.041-7.958 7.999 7.999 0 017.957-8.042zm-41.985 21.64a8 8 0 01-.269 11.311c-.16.153-.32.307-.479.462a8 8 0 01-11.168-11.457c.2-.196.402-.39.605-.584a8 8 0 0111.31.269zm84.813 0a8 8 0 0111.31-.268c.203.194.405.388.606.584a8 8 0 01-11.168 11.457 55.127 55.127 0 00-.48-.462 8 8 0 01-.268-11.31zM45.695 66.925a8 8 0 017.954 8.045 61.766 61.766 0 000 .668 8 8 0 11-16 .09 74.855 74.855 0 010-.848 8 8 0 018.046-7.955zm137.839 0a8 8 0 018.045 7.955l.001.256v.168l-.001.424a8 8 0 01-16-.09l.001-.21v-.124-.185l-.001-.149a8 8 0 017.955-8.045zM60.147 117.336a8 8 0 0111.313-.144c.159.155.319.309.48.462a8 8 0 01-11.042 11.579 81.431 81.431 0 01-.606-.584 8 8 0 01-.145-11.313zm108.934 0a8 8 0 01-.144 11.313c-.201.196-.403.39-.606.584a8 8 0 01-11.042-11.579c.161-.153.321-.307.48-.462a7.999 7.999 0 0111.312.144zm-62.845 25.227a8 8 0 018.041-7.958l.157.001H114.758l.193-.001a8 8 0 01.084 16l-.421.001-.421-.001a7.999 7.999 0 01-7.957-8.042z"
        clipRule="evenodd"
      ></path>
      <g filter="url(#filter1_bdi_2496_19225)">
        <path
          fill="url(#paint0_radial_2496_19225)"
          fillOpacity="0.77"
          d="M45.937 160.047c-.238.005-.477.008-.716.008-17.795 0-32.221-14.426-32.221-32.221 0-12.077 6.644-22.601 16.476-28.119a55.021 55.021 0 01-.008-.881c0-29.461 23.883-53.344 53.344-53.344 25.413 0 46.675 17.77 52.038 41.563 19.444.817 34.957 16.839 34.957 36.484 0 20.168-16.349 36.517-36.517 36.517-.239 0-.477-.002-.715-.007v.006H45.937v-.006z"
        ></path>
      </g>
      <g
        style={{ mixBlendMode: "soft-light" }}
        filter="url(#filter2_di_2496_19225)"
      >
        <path
          fill="#848484"
          d="M77.442 127.834c0 17.795-14.426 32.221-32.221 32.221-17.795 0-32.221-14.426-32.221-32.221 0-17.795 14.426-32.22 32.221-32.22 17.795 0 32.221 14.425 32.221 32.22z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_i_2496_19225"
          width="110.189"
          height="110.773"
          x="54.864"
          y="26.75"
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
          <feColorMatrix values="0 0 0 0 0.772549 0 0 0 0 0.898039 0 0 0 0 0.968627 0 0 0 0.9 0"></feColorMatrix>
          <feBlend
            in2="shape"
            result="effect1_innerShadow_2496_19225"
          ></feBlend>
        </filter>
        <filter
          id="filter1_bdi_2496_19225"
          width="182.429"
          height="140.187"
          x="0.189"
          y="39.084"
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
            result="effect1_backgroundBlur_2496_19225"
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
            in2="effect1_backgroundBlur_2496_19225"
            result="effect2_dropShadow_2496_19225"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_2496_19225"
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
            result="effect3_innerShadow_2496_19225"
          ></feBlend>
        </filter>
        <filter
          id="filter2_di_2496_19225"
          width="76.453"
          height="75.651"
          x="9.797"
          y="89.208"
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
            result="effect1_dropShadow_2496_19225"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_2496_19225"
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
            result="effect2_innerShadow_2496_19225"
          ></feBlend>
        </filter>
        <radialGradient
          id="paint0_radial_2496_19225"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(90.669 -.427 68.688) scale(90.0967 102.81)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#99CEFF"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

export default PartiallyCloudyInactive;
