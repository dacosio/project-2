import React, { ChangeEvent } from "react";
import { SwitchProps } from "./Switch.props";
import { Button, Checkbox, Label, Slider } from "./Switch.style";

const Switch = (props: SwitchProps): JSX.Element => {
  const { size = "md", value, setValue, style } = props;

  return (
    <Label _size={size} style={style}>
      <Checkbox
        type="checkbox"
        _size={size}
        checked={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.checked)
        }
      />
      <Slider>
        <Button _size={size} />
      </Slider>
    </Label>
  );
};

export default React.memo(Switch);
