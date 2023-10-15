import { CircleProgressProps } from "../../base/CircleProgress/CircleProgress.props";

export interface HarvestCardProps extends CircleProgressProps {
  cropName: string;
  datePlanted: string;
  estYield: string;
  height: number;
  width: number;
  mobile?: boolean;
}
