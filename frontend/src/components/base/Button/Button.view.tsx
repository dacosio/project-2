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
    iconPosition = null,
    variant = "primary",
    takeFullWidth = false,
    size = "md",
    ...buttonProps
  } = props;

  let textColor:
    | keyof Theme["btn"]["text"]
    | keyof Theme["grey"]
    | keyof Theme["brand"]
    | keyof Theme["btn"]["color"];

  // this is design specific, amend base on the design
  if (variant === "primary") {
    textColor = "white";
  } else if (variant === "outline") {
    textColor = "pressed";
  } else if (variant === "elevated") {
    textColor = "outline";
  } else if (variant === "tonal") {
    textColor = "invert";
  } else if (variant === "disabled") {
    textColor = "disabled";
  } else {
    textColor = "white";
  }

  // this is design specific, amend base on the design
  let textVariant: TypographyProps["variant"];
  let textWeight = "400";

  if (size === "sm") {
    textVariant = "btn";
    textWeight = "500";
  } else if (size === "md") {
    textVariant = "btn";
    textWeight = "400";
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
        <Typography
          variant={textVariant}
          textColor={textColor}
          weight={textWeight}
        >
          {text}
        </Typography>
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
