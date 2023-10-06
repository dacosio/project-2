import React from 'react';

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from './SVG.props';

const CollapsedLogo = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 40 52"
    >
      <path
        fill="#57CB62"
        d="M39.994 4.295C39.994 1.924 38.08 0 35.721 0H20.017C8.98 0 .034 8.99.034 20.082c0 11.091 8.946 20.082 19.983 20.082S40 31.174 40 20.082V4.295h-.006zm-9.156 15.747v.045c0 5.881-4.741 10.646-10.593 10.646-.735 0-1.447-.075-2.142-.218v-5.331a2.27 2.27 0 00-2.263-2.273h-5.806c-.245-.9-.382-1.844-.382-2.824 0-5.88 4.741-10.644 10.593-10.644.245 0 .49.011.73.028h7.595a2.27 2.27 0 012.262 2.273v8.298h.006z"
      ></path>
      <path
        fill="#009175"
        d="M20.16 40.164H4.32c-2.383 0-4.314-1.942-4.314-4.335v-15.81l20.148 20.145h.006z"
      ></path>
      <path
        fill="#57CB62"
        d="M9.635 29.668H0V52h9.635V29.668zM15.84 22.91H7.533l10.57 10.566v-8.298a2.27 2.27 0 00-2.263-2.273v.006z"
      ></path>
    </svg>
  );
};

export default CollapsedLogo;
