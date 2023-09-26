import React, { ChangeEvent } from "react";
import { SwitchProps } from "./Switch.props";
import { Button, Checkbox, Label, Slider } from "./Switch.style";

const Switch = (props: SwitchProps): JSX.Element => {
  const { size = "md", value, setValue, style } = props;

  return (
    <Label sizing={size} style={style}>
      <Checkbox
        type="checkbox"
        sizing={size}
        checked={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.checked)
        }
      />
      <Slider>
        <Button sizing={size} />
      </Slider>
    </Label>
  );
};

export default React.memo(Switch);
