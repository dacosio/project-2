import React from 'react';

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from './SVG.props';

const Developer = (props: SVGProps): JSX.Element => {
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
      <g clipPath="url(#clip0_3620_28030)">
        <path
          stroke="#fff"
          strokeLinejoin="round"
          d="M40.465 34.184v1.09c0 1.206-.96 2.182-2.143 2.182H13.679c-1.184 0-2.143-.976-2.143-2.181v-1.091h12.322c0 .6.482 1.09 1.071 1.09h2.143c.59 0 1.071-.49 1.071-1.09h12.322z"
        ></path>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M36.179 17.816h.535c.89 0 1.608.731 1.608 1.637V34.18M13.679 34.18V19.453c0-.906.718-1.637 1.607-1.637h.536M17.964 32.001V16.183c0-.905.718-1.636 1.607-1.636h12.857c.89 0 1.607.73 1.607 1.636v15.818M17.964 18.91h13.928"
        ></path>
        <ellipse
          cx="20.107"
          cy="16.729"
          fill="#fff"
          rx="0.536"
          ry="0.545"
        ></ellipse>
        <ellipse
          cx="22.25"
          cy="16.729"
          fill="#fff"
          rx="0.536"
          ry="0.545"
        ></ellipse>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M31.893 32H20.107M20.107 29.816h11.786M20.107 27.637h11.786M29.214 21.637l2.143 1.636-2.143 1.636M22.785 24.91l-2.142-1.637 2.142-1.636M27.072 21.09l-2.143 4.363"
        ></path>
        <ellipse
          cx="15.822"
          cy="25.456"
          fill="#fff"
          rx="0.536"
          ry="0.545"
        ></ellipse>
        <ellipse
          cx="15.822"
          cy="23.272"
          fill="#fff"
          rx="0.536"
          ry="0.545"
        ></ellipse>
        <ellipse
          cx="15.822"
          cy="21.092"
          fill="#fff"
          rx="0.536"
          ry="0.545"
        ></ellipse>
        <ellipse
          cx="36.178"
          cy="30.909"
          fill="#fff"
          rx="0.536"
          ry="0.545"
        ></ellipse>
        <ellipse
          cx="36.178"
          cy="28.729"
          fill="#fff"
          rx="0.536"
          ry="0.545"
        ></ellipse>
        <ellipse
          cx="36.178"
          cy="26.546"
          fill="#fff"
          rx="0.536"
          ry="0.545"
        ></ellipse>
      </g>
      <defs>
        <clipPath id="clip0_3620_28030">
          <path
            fill="#fff"
            d="M0 0H30V24H0z"
            transform="translate(11 14)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default Developer;
