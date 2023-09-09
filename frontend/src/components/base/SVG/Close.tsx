import React from 'react';

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from './SVG.props';

const Close = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      width={width || "12"}
      height={height || "12"}
      viewBox="0 0 12 12"
      fill={fill || theme.grey.noshade}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.88127 5.99963L10.8188 2.06838C10.9365 1.95069 11.0026 1.79107 11.0026 1.62463C11.0026 1.45819 10.9365 1.29857 10.8188 1.18088C10.7011 1.06319 10.5415 0.99707 10.375 0.99707C10.2086 0.99707 10.049 1.06319 9.93127 1.18088L6.00002 5.11838L2.06877 1.18088C1.95108 1.06319 1.79146 0.99707 1.62502 0.99707C1.45858 0.99707 1.29896 1.06319 1.18127 1.18088C1.06358 1.29857 0.997466 1.45819 0.997466 1.62463C0.997466 1.79107 1.06358 1.95069 1.18127 2.06838L5.11877 5.99963L1.18127 9.93088C1.12269 9.98898 1.0762 10.0581 1.04447 10.1343C1.01274 10.2104 0.996399 10.2921 0.996399 10.3746C0.996399 10.4571 1.01274 10.5388 1.04447 10.615C1.0762 10.6911 1.12269 10.7603 1.18127 10.8184C1.23937 10.877 1.3085 10.9235 1.38466 10.9552C1.46082 10.9869 1.54252 11.0033 1.62502 11.0033C1.70753 11.0033 1.78922 10.9869 1.86538 10.9552C1.94155 10.9235 2.01067 10.877 2.06877 10.8184L6.00002 6.88088L9.93127 10.8184C9.98938 10.877 10.0585 10.9235 10.1347 10.9552C10.2108 10.9869 10.2925 11.0033 10.375 11.0033C10.4575 11.0033 10.5392 10.9869 10.6154 10.9552C10.6915 10.9235 10.7607 10.877 10.8188 10.8184C10.8774 10.7603 10.9239 10.6911 10.9556 10.615C10.9873 10.5388 11.0036 10.4571 11.0036 10.3746C11.0036 10.2921 10.9873 10.2104 10.9556 10.1343C10.9239 10.0581 10.8774 9.98898 10.8188 9.93088L6.88127 5.99963Z"
        fill="#0E0E0E"
      />
    </svg>
  );
};

export default Close;