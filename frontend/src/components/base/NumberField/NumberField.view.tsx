import React, { ChangeEvent, useState } from "react";
import { NumberFieldProps } from "./NumberField.props";
import { Container, InputNumber, Error } from "./NumberField.style";
import Typography from "../Typography";

const NumberField = (props: NumberFieldProps): JSX.Element => {
  const {
    name,
    label,
    value,
    setValue = () => null,
    placeholder,
    error,
    onChange = () => null,
    onBlur = () => null,
  } = props;

  const [inputValue, setInputValue] = useState<string>(value || "");
  const [inputError, setInputError] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
    setInputValue(event.target.value);

    if (!isNaN(Number(event.target.value))) {
      setValue(event.target.value);
      setInputError("");
    } else {
      setValue("");
      setInputError("This field should be a number.");
    }
  };

  return (
    <Container>
      {label && (
        <Typography variant="small" textColor="shade9">
          {label}
        </Typography>
      )}
      {name ? (
        <InputNumber
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      ) : (
        <InputNumber
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
        />
      )}
      {(error || inputError) && (
        <Error variant="small" textColor="error">
          {error || inputError}
        </Error>
      )}
    </Container>
  );
};

export default React.memo(NumberField);
