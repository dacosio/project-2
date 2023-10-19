import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const Temperature = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 28}
      height={height || 28}
      fill="none"
      {...props}
    >
      <path
        fill="#57CB62"
        d="M18.354 16.064V5.482c0-2.363-1.89-4.29-4.22-4.29h-.85c-2.324 0-4.22 1.92-4.22 4.29v10.582a6.716 6.716 0 0 0-1.915 4.68c0 3.677 2.941 6.66 6.557 6.66 3.616 0 6.55-2.99 6.55-6.66 0-1.77-.708-3.446-1.915-4.68h.013Zm-4.642 9.472C11.116 25.536 9 23.384 9 20.744c0-1.512.721-2.938 1.915-3.835V5.482c0-1.333 1.065-2.416 2.376-2.416h.85c1.312 0 2.377 1.083 2.377 2.416V16.91a4.813 4.813 0 0 1 1.915 3.835c0 2.64-2.117 4.792-4.713 4.792h-.007Z"
      />
      <path
        fill="#57CB62"
        d="m15.192 18.257-.479-.277V7.116a.559.559 0 0 0-.56-.561h-.882c-.303 0-.56.25-.56.561V17.98l-.478.277c-.943.548-1.51 1.509-1.51 2.584a2.99 2.99 0 0 0 2.98 2.99 2.994 2.994 0 0 0 2.978-2.99c0-1.068-.566-2.036-1.51-2.584h.02Z"
      />
    </svg>
  );
};

export default Temperature;
