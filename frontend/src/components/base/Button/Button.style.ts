import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import { ButtonStyleProps, Variants, ButtonSizes } from "./Button.props";

//default state
const backgroundColor: Record<Variants, string> = {
  primary: theme.btn.color.primary,
  outline: theme.grey.noshade,
  elevated: theme.neutral.n0,
  tonal: theme.btn.color.token,
  ghost: theme.brand.primary,

  disabled: theme.grey.shade3,
  success: theme.brand.success,
  unselected: theme.grey.shade9,
};
const hoverBgColor: Record<Variants, string> = {
  primary: theme.btn.color.hover,
  outline: theme.btn.color.lightest,
  elevated: theme.btn.color.lightest,
  tonal: theme.btn.color.tokenHover,
  ghost: theme.grey.noshade,
  disabled: theme.grey.shade3,
  success: theme.brand.success,
  unselected: theme.grey.shade9,
};

//active or pressed
const active: Record<Variants, string> = {
  primary: theme.btn.color.pressed,
  outline: theme.btn.color.outlineBg,
  elevated: theme.btn.color.outlineBg,
  tonal: theme.btn.color.tokenPressed,
  ghost: theme.btn.text.primary,
  disabled: theme.grey.shade3,
  success: theme.brand.success,
  unselected: theme.grey.shade9,
};

const disabled: Record<Variants, string> = {
  primary: theme.btn.color.pressed,
  outline: theme.grey.noshade,
  elevated: theme.brand.primary,
  tonal: theme.brand.primary,
  ghost: theme.brand.primary,
  disabled: theme.grey.shade3,
  success: theme.brand.success,
  unselected: theme.grey.shade9,
};

// const color: Record<Variants, string> = {
//   primary: theme.btn.color.primary,
//   outline: theme.grey.noshade,
//   elevated: theme.brand.primary,
//   tonal: theme.brand.primary,
//   ghost: theme.brand.primary,
//   disabled: theme.grey.shade3,
//   success: theme.brand.success,
//   unselected: theme.grey.shade9,
// };

const border: Record<Variants, string> = {
  primary: "none",
  outline: `1.5px solid ${theme.btn.color.pressed}`,
  elevated: "none",
  tonal: "none",
  ghost: "none",
  disabled: "none",
  success: "none",
  unselected: "none",
};

const padding: Record<ButtonSizes, string> = {
  sm: "8px 12px",
  md: "16px 16px",
  lg: "",
};

export const ButtonContainer = styled.button<
  ButtonStyleProps & { hasText: boolean }
>`
  max-height: 52px;
  padding: ${({ size }) => padding[size]};
  background-color: ${({ variant }) => backgroundColor[variant]};
  border: ${({ variant }) => border[variant]};
  border-radius: 16px;
  width: ${(props) => (props.takeFullWidth ? "100%" : "auto")};
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ variant }) =>
    variant === "elevated" && "0px 2px 5px 0px rgba(0, 0, 0, 0.20)"};

  :focus {
    outline: none;
  }

  :active {
    background-color: ${({ variant }) => active[variant]};
    transform: scale(0.95);
    transition: transform 0.1s ease-in-out;
  }

  :hover {
    background-color: ${({ variant }) => hoverBgColor[variant]};
  }
  cursor: pointer;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;

export const IconContainer = styled.div<{
  hasText: boolean;
  iconPosition: "before" | "after" | null;
}>`
  display: flex;
  align-items: center;
  margin-left: ${(props) =>
    props.hasText === true && props.iconPosition === "after" ? "8px" : "0px"};
  margin-right: ${(props) =>
    props.hasText === true && props.iconPosition === "before" ? "8px" : "0px"};
`;
