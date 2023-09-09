import React from "react";
import { ButtonProps } from "./Button.props";

import { Theme } from "types/Theme";
import Typography from "../Typography";
import { TypographyProps } from "../Typography/Typography.props";
import {
  ButtonContainer,
  LoadingContainer,
  IconContainer,
} from "./Button.style";
const Button = (props: ButtonProps): JSX.Element => {
  // const theme = useTheme();
  const {
    loading,
    icon,
    text,
    color,
    iconPosition = "after",
    variant = "primary",
    takeFullWidth = false,
    size = "md",
    ...buttonProps
  } = props;

  let textColor: keyof Theme["brand"] | keyof Theme["grey"];

  // this is design specific, amend base on the design
  if (variant === "primary") {
    textColor = "noshade";
  } else if (variant === "outline") {
    textColor = "primary";
  } else if (variant === "success") {
    textColor = "noshade";
  } else if (variant === "unselected") {
    textColor = "noshade";
  } else {
    textColor = "shade5";
  }

  // this is design specific, amend base on the design
  let textVariant: TypographyProps["variant"];
  let textWeight = "500";

  if (size === "sm") {
    textVariant = "label";
    textWeight = "500";
  } else if (size === "md") {
    textVariant = "overline";
    textWeight = "900";
  }

  const hasText = text && text?.length > 0 ? true : false;

  return (
    <ButtonContainer
      size={size}
      color={color}
      variant={variant}
      hasText={hasText}
      iconPosition={iconPosition}
      takeFullWidth={takeFullWidth}
      {...buttonProps}
    >
      {iconPosition === "before" && (
        <IconContainer hasText={hasText} iconPosition={iconPosition}>
          {icon}
        </IconContainer>
      )}

      {text && (
        <Typography variant={textVariant} color={textColor} weight={textWeight}>
          {text}
        </Typography>
      )}
      {loading && (
        <LoadingContainer>
          {/* <Spinner width={24} height={24} /> */}
          {/* Enter the spinner here for the button */}
        </LoadingContainer>
      )}

      {iconPosition === "after" && !loading && (
        <IconContainer hasText={hasText} iconPosition={iconPosition}>
          {icon}
        </IconContainer>
      )}
    </ButtonContainer>
  );
};

export default Button;