import React, { ChangeEvent, useEffect, useState } from "react";
import { TabProps } from "./Tab.props";
import { Container, Label, Radio } from "./Tab.style";
import Chips from "../Chips";

const Tab = (props: TabProps): JSX.Element => {
  const { options, value, setValue, name } = props;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Container>
      {options.map((option, index) => (
        <Label key={index}>
          <Chips
            label={option.label}
            variant="outlined"
            active={value === option.value}
          />
          <Radio
            type="radio"
            name={name}
            value={option.value}
            onChange={handleOnChange}
            checked={value === option.value}
          />
        </Label>
      ))}
    </Container>
  );
};

export default React.memo(Tab);
