import React from "react";
import { ChipsProps } from "./Chips.props";
import { ChipContainer, Label, DeleteIcon } from "./Chips.style";
import { TypographyProps } from "../Typography/Typography.props";
import { Theme } from "types/Theme";
import Typography from "../Typography";

const Chips = (props: ChipsProps): JSX.Element => {
  const {
    label,
    color,
    variant = "filled",
    size = "md",
    active = false,
    ...chipsProps
  } = props;
  let textColor:
    | keyof Theme["btn"]["text"]
    | keyof Theme["grey"]
    | keyof Theme["brand"]
    | keyof Theme["btn"]["color"];

  // this is design specific, amend base on the design
  if (variant === "outlined") {
    textColor = "pressed";
  } else if (variant === "filled") {
    textColor = "invert";
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
    textWeight = "700";
  } else {
    textWeight = "400";
  }

  const hasText = label && label?.length > 0 ? true : false;

  return (
    <ChipContainer
      size={"lg"}
      variant={variant}
      color={color}
      active={active}
      {...props}
    >
      {label && (
        <Typography
          variant={textVariant}
          textColor={textColor}
          weight={textWeight}
        >
          {label}
        </Typography>
      )}
    </ChipContainer>
  );
};

export default React.memo(Chips);
