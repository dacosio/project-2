import React from 'react';

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from './SVG.props';

const Designer = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="52"
      fill="none"
      viewBox="0 0 52 52"
    >
      <path
        fill="#31B03D"
        d="M51.993 5.56c0-3.069-2.491-5.56-5.56-5.56H26a25.864 25.864 0 00-13.478 3.766A26.062 26.062 0 001.579 17.06 25.89 25.89 0 000 26v20.44C0 49.509 2.491 52 5.56 52h20.433c4.485 0 8.71-1.134 12.395-3.136a26.053 26.053 0 006.858-5.375 25.894 25.894 0 005.175-8.54A25.89 25.89 0 0052 26.006V5.567l-.007-.007z"
      ></path>
      <g stroke="#fff" strokeLinejoin="round" clipPath="url(#clip0_3620_28068)">
        <path d="M18.208 14.46s-.458 3.693 2.75 3.693c2.53 0 4.583 2.068 4.583 4.616 0 2.547-2.053 4.615-4.583 4.615-3.039 0-5.5-2.478-5.5-5.538 0-4.08 2.75-7.385 2.75-7.385z"></path>
        <path
          strokeLinecap="round"
          d="M20.958 20.46a2.3 2.3 0 012.292 2.309"
        ></path>
        <path d="M22.64 27.063c.84 1.583 2.32 3.54 4.222 5.456 3.648 3.674 7.452 5.801 8.497 4.754 1.045-1.053-1.072-4.884-4.72-8.557-1.902-1.916-3.846-3.407-5.418-4.251"></path>
        <path d="M24.024 29.22c.046 0 .092.01.142.01 1.774 0 3.209-1.445 3.209-3.232 0-.046-.005-.096-.01-.143"></path>
        <path
          strokeLinecap="round"
          d="M30.125 19.077l6.417-1.847-1.834 6.462M33.333 18.152l2.292 2.308M19.125 30.152l4.583 4.616M17.75 31.54l4.583 4.614-1.375 1.385c-2.53 0-4.583-2.068-4.583-4.615l1.375-1.385z"
        ></path>
        <path
          strokeLinecap="round"
          d="M20.097 29.176l-2.347 2.363 4.583 4.615 4.08-4.108M30.17 28.263l4.538-4.57-4.583-4.615-2.814 2.834M21.417 32.46l2.87-2.89M27.715 26.118l4.702-4.735"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3620_28068">
          <path
            fill="#fff"
            d="M0 0H22V24H0z"
            transform="translate(15 14)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default Designer;
