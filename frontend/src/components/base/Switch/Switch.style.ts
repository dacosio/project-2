import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import { SwitchSizes, SwitchStyleProps } from "./Switch.props";

const slider: Record<SwitchSizes, string> = {
  sm: "width: 52px; height: 28px;",
  md: "width: 60px; height: 32px;",
  lg: "width: 68px; height: 36px;",
};

const button: Record<SwitchSizes, string> = {
  sm: "18px;",
  md: "22px;",
  lg: "26px;",
};

const transform: Record<SwitchSizes, string> = {
  sm: "translateX(24px);",
  md: "translateX(28px);",
  lg: "translateX(32px);",
};

export const Label = styled.label<SwitchStyleProps>`
  ${({ _size }) => slider[_size]}
  position: relative;
  display: inline-block;
  border-radius: 100px;
`;

export const Checkbox = styled.input<SwitchStyleProps>`
  display: none;

  &:checked + * {
    background-color: #426eff;
  }

  &:checked + * > * {
    transform: ${({ _size }) => transform[_size]};
  }
`;

export const Slider = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: #d1d1d9;
  transition: 0.3s;
  border-radius: 100px;
`;

export const Button = styled.div<SwitchStyleProps>`
  width: ${({ _size }) => button[_size]}
  height: ${({ _size }) => button[_size]}
  left: 5px;
  bottom: 5px;
  position: absolute;
  background-color: white;
  transition: 0.3s;
  border-radius: 50%;
`;
