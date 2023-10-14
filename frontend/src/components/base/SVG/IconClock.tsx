import React from 'react';

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from './SVG.props';

const IconClock = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 60}
      height={width || 60}
      viewBox="0 0 60 60"
      fill="none"
      {...props}
    >
      <path
        fill="#57CB62"
        d="M54.375 30a24.375 24.375 0 1 1-48.75 0 24.375 24.375 0 0 1 48.75 0ZM0 30a30 30 0 1 0 60 0 30 30 0 0 0-60 0Zm27.188-15.938V30c0 .938.468 1.816 1.253 2.344l11.25 7.5a2.806 2.806 0 0 0 3.903-.785 2.804 2.804 0 0 0-.785-3.903L32.813 28.5V14.062A2.806 2.806 0 0 0 30 11.25a2.806 2.806 0 0 0-2.813 2.813Z"
      />
    </svg>
  );
};

export default IconClock;
