import React from 'react';

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from './SVG.props';

const IconHumidity = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 55}
      height={width || 55}
      viewBox="0 0 70 70"
      fill="none"
      {...props}
    >
      <path
        fill="#57CB62"
        d="M40.164 25.016 52.22 46.508c5.358 9.551-1.34 21.491-12.055 21.491S22.751 56.06 28.11 46.508l12.055-21.492ZM.002 7.861c.038-.2.057-.406.116-.598.38-1.228 1.628-1.824 2.759-1.34 1.517.647 3.064 1.202 4.66 1.595 1.347.332 2.71.536 4.096.525 1.578-.012 3.087-.37 4.537-1.024 1.294-.583 2.49-1.357 3.689-2.128 1.082-.694 2.158-1.397 3.277-2.023 1.82-1.018 3.72-1.802 5.73-2.273A22.793 22.793 0 0 1 32.774.04a28.07 28.07 0 0 1 4.565.13c1.88.197 3.736.546 5.576.996.379.093.761.176 1.133.293.848.267 1.352.883 1.475 1.805.12.894-.205 1.614-.909 2.121-.51.368-1.074.444-1.67.288-1.282-.333-2.57-.64-3.875-.843a53.977 53.977 0 0 0-2.737-.347 21.523 21.523 0 0 0-3.3-.071c-2.37.118-4.638.681-6.8 1.728-1.268.614-2.461 1.37-3.655 2.125-1.006.637-2.008 1.282-3.033 1.881-1.7.994-3.499 1.713-5.42 2.047a16.176 16.176 0 0 1-4.424.138c-2.186-.22-4.296-.796-6.364-1.556a34.02 34.02 0 0 1-2.071-.826C.536 9.627.131 9.017.022 8.186.016 8.141.007 8.095 0 8.05V7.86l.002.001ZM0 17.928c.045-.23.071-.466.14-.687.288-.918 1.238-1.54 2.142-1.426.296.036.567.149.84.262 1.593.66 3.213 1.23 4.89 1.602 1.354.3 2.72.47 4.107.396a11.037 11.037 0 0 0 3.615-.822c1.028-.419 1.994-.967 2.939-1.562 1.18-.744 2.346-1.508 3.534-2.236 1.604-.981 3.281-1.791 5.056-2.363a21.185 21.185 0 0 1 3.99-.871c1.775-.213 3.55-.214 5.329-.07 2.505.205 4.966.683 7.399 1.335 1.535.41 2.085 2.396 1 3.618-.56.632-1.264.821-2.057.615a44.426 44.426 0 0 0-3.895-.851c-1.15-.19-2.305-.35-3.47-.389a34.753 34.753 0 0 0-2.411-.017c-1.993.07-3.928.475-5.794 1.23-1.4.567-2.717 1.313-3.999 2.131-1.115.712-2.224 1.435-3.355 2.118-1.523.92-3.124 1.65-4.835 2.083-.806.204-1.621.336-2.448.397-.815.06-1.63.072-2.444.015a21.564 21.564 0 0 1-3.047-.453 29.504 29.504 0 0 1-4.072-1.221 47.395 47.395 0 0 1-1.799-.72C.558 19.707.117 19.076.02 18.173c-.004-.035-.012-.069-.018-.103v-.142H0ZM0 28.111c.036-.186.053-.377.11-.556.388-1.22 1.684-1.797 2.878-1.321 1.764.703 3.566 1.297 5.432 1.675 1.174.239 2.36.377 3.562.365a12.32 12.32 0 0 0 4.971-1.112c1.178-.529 2.283-1.185 3.382-1.854 1.576-.959 3.177-1.872 4.86-2.634a27.261 27.261 0 0 1 2.74-1.072c.684-.225 1.32-.17 1.852.35.54.529.703 1.19.483 1.903-.205.667-.556 1.264-1.148 1.678-.172.12-.37.217-.569.288-1.48.531-2.868 1.248-4.219 2.045-1.39.819-2.772 1.655-4.18 2.445a17.535 17.535 0 0 1-4.13 1.673c-1.93.507-3.893.634-5.878.462-1.565-.135-3.097-.451-4.609-.871a38.259 38.259 0 0 1-4.193-1.43C.557 29.825.125 29.22.02 28.383c-.005-.037-.014-.073-.02-.11v-.162Z"
      />
    </svg>
  );
};

export default IconHumidity;
