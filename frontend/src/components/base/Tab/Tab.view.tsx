import React, { ChangeEvent, useEffect, useState } from "react";
import { Option, TabProps } from "./Tab.props";
import { Container, Label, Radio } from "./Tab.style";
import Chips from "./../Chips";

const Tab = (props: TabProps): JSX.Element => {
  const { options, value, setValue, name } = props;

  const handleChange = (option: Option) => {
    setValue(option);
  };

  return (
    <Container>
      {options.map((option, index) => (
        <Label key={index}>
          <Chips
            label={option.label}
            variant="outlined"
            active={value?.value === option.value}
          />
          <Radio
            type="radio"
            name={name}
            value={option.value}
            onChange={() => handleChange(option)}
            checked={value?.value === option.value}
          />
        </Label>
      ))}
    </Container>
  );
};

export default React.memo(Tab);
