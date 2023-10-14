export interface SegmentedControlProps {
  options: string[];
  selectedOption: string | number;
  onClickControl: (newValue: string) => void;
  tooltips?: { option: string; value: string }[];
}
