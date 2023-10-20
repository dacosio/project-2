import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const Snow = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      width={width || 30}
      height={height || 30}
      viewBox="0 0 141 141"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="70.9922"
        y1="3.46094"
        x2="70.9922"
        y2="137.797"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
      />
      <path
        d="M54.6982 13.7539L70.9477 30.0033L85.7199 13.7539"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
      />
      <path
        d="M85.7207 134.887L69.4713 118.637L54.6991 134.887"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
      />
      <path
        d="M63.5654 38.8711L70.9515 46.2572L78.3376 38.8711"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
      />
      <path
        d="M76.8506 111.256L69.4645 103.87L62.0784 111.256"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
      />
      <line
        x1="137.383"
        y1="71.4141"
        x2="3.04687"
        y2="71.414"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
      />
      <path
        d="M127.089 55.1152L110.839 71.3647L127.089 86.1369"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
      />
      <path
        d="M5.95898 86.1367L22.2084 69.8873L5.95898 55.1151"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
      />
      <path
        d="M101.972 63.9805L94.5856 71.3666L101.972 78.7527"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
      />
      <path
        d="M29.5977 77.2793L36.9838 69.8932L29.5977 62.5071"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
      />
      <line
        x1="118.226"
        y1="22.4321"
        x2="23.2357"
        y2="117.422"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
      />
      <path
        d="M99.0166 19.6699L99.0166 42.6501L120.952 41.6055"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
      />
      <path
        d="M35.501 126.023L35.501 103.043L13.5654 104.088"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
      />
      <path
        d="M88.6777 41.8223V52.2678H99.1233"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
      />
      <path
        d="M47.3193 103.871L47.3193 93.4256L36.8738 93.4256"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
      />
      <line
        x1="118.423"
        y1="118.641"
        x2="23.4335"
        y2="23.6508"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
      />
      <path
        d="M121.191 99.4375L98.2113 99.4375L99.2558 121.373"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
      />
      <path
        d="M14.8291 35.9141L37.8093 35.9141L36.7647 13.9785"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
      />
      <path
        d="M99.0283 89.0938H88.5828V99.5393"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
      />
      <path
        d="M36.9844 47.7266L47.4299 47.7266L47.4299 37.281"
        stroke="white"
        stroke-width="6"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Snow;
