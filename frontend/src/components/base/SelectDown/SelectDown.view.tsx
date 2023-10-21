import React, { ChangeEvent, useEffect } from "react";
import { SelectDownProps } from "./SelectDown.props";
import { Container, Option, Select } from "./SelectDown.style";

const SelectDown = (props: SelectDownProps): JSX.Element => {
  const { label, options, value, setValue } = props;

  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <Container>
      <Select defaultValue={value ? value : ""} onChange={handleOnChange}>
        {label && (
          <Option value="" disabled>
            {label}
          </Option>
        )}
        {options.map((option, index) => (
          <Option value={option.value} key={index}>
            {option.label}
          </Option>
        ))}
      </Select>
    </Container>
  );
};

export default React.memo(SelectDown);
