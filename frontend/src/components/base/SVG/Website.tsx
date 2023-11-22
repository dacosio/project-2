import React, { useState } from 'react';

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from './SVG.props';

const Website = (props: SVGProps): JSX.Element => {
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
      <rect width="16" height="16" fill={fillColor} rx="3"></rect>
      <path
        fill="#fff"
        d="M10.18 9c.04-.33.07-.66.07-1 0-.34-.03-.67-.07-1h1.69c.08.32.13.655.13 1s-.05.68-.13 1m-2.575 2.78c.3-.555.53-1.155.69-1.78h1.475a4.015 4.015 0 01-2.165 1.78zM9.17 9H6.83c-.05-.33-.08-.66-.08-1 0-.34.03-.675.08-1h2.34c.045.325.08.66.08 1 0 .34-.035.67-.08 1zM8 11.98A6.781 6.781 0 017.045 10h1.91A6.781 6.781 0 018 11.98zM6 6H4.54A3.962 3.962 0 016.7 4.22 8.617 8.617 0 006 6zm-1.46 4H6c.175.625.4 1.225.7 1.78A4.004 4.004 0 014.54 10zm-.41-1A4.12 4.12 0 014 8c0-.345.05-.68.13-1h1.69c-.04.33-.07.66-.07 1 0 .34.03.67.07 1M8 4.015c.415.6.75 1.27.955 1.985h-1.91A6.81 6.81 0 018 4.015zM11.46 6H9.985a7.825 7.825 0 00-.69-1.78c.92.315 1.685.95 2.165 1.78zM8 3a5 5 0 100 10A5 5 0 008 3z"
      ></path>
    </svg>
  );
};

export default Website;
