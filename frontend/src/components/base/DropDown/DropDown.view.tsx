import React, { ChangeEvent } from "react";
import { DropDownProps } from "./DropDown.props";
import { Container, Option, Select, Error } from "./DropDown.style";

const SelectDown = (props: DropDownProps): JSX.Element => {
  const {
    name,
    options,
    value,
    setValue = () => null,
    placeholder,
    error,
    onChange = () => null,
    onBlur = () => null,
  } = props;

  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event);
    setValue(event.target.value);
  };

  return (
    <Container>
      <Select
        name={name}
        defaultValue={value ? value : ""}
        onChange={handleOnChange}
        onBlur={onBlur}
      >
        {placeholder && (
          <Option value="" disabled>
            {placeholder}
          </Option>
        )}
        {options.map((option, index) => (
          <Option value={option.value} key={index}>
            {option.label}
          </Option>
        ))}
      </Select>
      {error && (
        <Error variant="small" textColor="error">
          {error}
        </Error>
      )}
    </Container>
  );
};

export default React.memo(SelectDown);
