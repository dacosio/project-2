import React from "react";
import { ChipsProps } from "./Chips.props";
import { ChipContainer, Label, DeleteIcon } from "./Chips.style";

const Chips = (props: ChipsProps): JSX.Element => {
  const { label, color, variant = "filled", onDelete, ...chipsProps } = props;

  return (
    <ChipContainer
      iconPosition={null}
      size={"lg"}
      variant={variant}
      color={color}
      {...props}
    >
      <Label>{label}</Label>
      {onDelete && (
        <DeleteIcon onClick={onDelete}>
          {/* Your delete icon here */}
        </DeleteIcon>
      )}
    </ChipContainer>
  );
};

export default React.memo(Chips);
