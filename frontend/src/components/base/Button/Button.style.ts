import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import { ButtonStyleProps, Variants, ButtonSizes } from "./Button.props";

const backgroundColor: Record<Variants, string> = {
  primary: theme.brand.primary,
  outline: theme.grey.noshade,
  disabled: theme.grey.shade3,
  success: theme.brand.success,
  unselected: theme.grey.shade9,
  accent: theme.brand.accent
};

const border: Record<Variants, string> = {
  primary: "none",
  outline: `1.5px solid ${theme.brand.primary}`,
  disabled: `1px solid ${theme.grey.shade5}`,
  success: "none",
  unselected: "none",
  accent: "none"
};

const padding: Record<ButtonSizes, string> = {
  sm: "8px 12px",
  md: "18px 36px",
  lg: "42px 72px",
};

export const ButtonContainer = styled.button<
  ButtonStyleProps & { hasText: boolean }
>`
  max-height: 48px;
  padding: ${({ size }) => padding[size]};
  background-color: ${({ variant }) => backgroundColor[variant]};
  border: ${({ variant }) => border[variant]};
  border-radius: 4px;
  width: ${(props) => (props.takeFullWidth ? "100%" : "auto")};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  :focus {
    outline: none;
  }

  :hover {
    opacity: 0.5;
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
  iconPosition: "before" | "after";
}>`
  display: flex;
  align-items: center;
  margin-left: ${(props) =>
    props.hasText && props.iconPosition === "after" ? "8px" : "0"};
  margin-right: ${(props) =>
    props.hasText && props.iconPosition === "before" ? "8px" : "0"};
`;
