import React, { useState } from 'react';

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from './SVG.props';

const LinkedinIcon = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const fillColor = isHovered ? "#FF4D03" : "#FA8029";

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 16 16"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <g clipPath="url(#clip0_3621_28105)">
        <path
          fill={fillColor}
          d="M14.558-.055c.442 0 .866.164 1.178.456.313.292.489.687.489 1.1v12.943c0 .412-.176.808-.489 1.1a1.73 1.73 0 01-1.178.455H1.167a1.73 1.73 0 01-1.179-.456 1.505 1.505 0 01-.488-1.1V1.502c0-.413.176-.808.488-1.1a1.729 1.729 0 011.179-.456h13.391zm-.641 13.108V8.931c0-.672-.287-1.317-.796-1.793a2.818 2.818 0 00-1.921-.742c-.708 0-1.533.404-1.933 1.01v-.863H6.942v6.51h2.325V9.22c0-.599.516-1.089 1.158-1.089.31 0 .606.115.825.319.219.204.342.481.342.77v3.834h2.325zm-9.684-7.73c.372 0 .728-.138.99-.383.263-.246.41-.578.41-.924 0-.724-.625-1.315-1.4-1.315-.373 0-.731.139-.996.385-.264.247-.412.581-.412.93 0 .723.633 1.306 1.408 1.306zm1.159 7.73v-6.51H3.083v6.51h2.309z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3621_28105">
          <rect width="16" height="16" fill="#fff" rx="3"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default LinkedinIcon;
