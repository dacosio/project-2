import React from "react";

import { useTheme } from "../../../utils/Theme";

import { SVGProps } from "./SVG.props";

const Leaf = (props: SVGProps): JSX.Element => {
  const theme = useTheme();
  const { width, height, fill } = props;

  // Paste converted svg below
  // https://react-svgr.com/playground/?typescript=true
  return (
    <svg
      width={width || 52}
      height={height || 52}
      viewBox="0 0 52 52"
      fill="none"
    >
      <path
        d="M51.9926 5.56031C51.9926 2.49102 49.5016 0 46.4323 0H26C22.4117 0 18.994 0.726547 15.8802 2.04619C14.7163 2.54291 13.5894 3.11377 12.5218 3.76618C7.51754 6.80582 3.61791 11.4839 1.57913 17.059C0.556031 19.8466 0 22.8566 0 26C0 26.0445 0 26.0964 0 26.1409V46.4397C0 49.509 2.49102 52 5.56031 52H25.9926C30.4779 52 34.7037 50.8657 38.3884 48.864C39.493 48.2635 40.5532 47.5888 41.554 46.84C42.5549 46.0912 43.5038 45.2757 44.3861 44.3935C44.6826 44.0969 44.9644 43.8004 45.2461 43.489C47.485 41.0277 49.2569 38.1363 50.4209 34.9484C51.444 32.1608 52 29.1508 52 26.0074C52 25.9629 52 25.9184 52 25.8666V5.56772L51.9926 5.56031Z"
        fill="#57CB62"
      />
      <path
        d="M16.9902 34.9068L34.9068 16.9902M34.9068 16.9902H16.9902M34.9068 16.9902V34.9068"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Leaf;
