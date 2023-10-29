import React, { ChangeEvent, useState } from "react";
import { NumberFieldProps } from "./NumberField.props";
import { Container, Number, Error } from "./NumberField.style";
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

  const [inputError, setInputError] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event);

    if (
      !isNaN(parseFloat(event.target.value)) &&
      isFinite(parseFloat(event.target.value))
    ) {
      setInputError("");
    } else {
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
      <Number
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
      ></Number>
      {(error || inputError) && (
        <Error variant="small" textColor="error">
          {error || inputError}
        </Error>
      )}
    </Container>
  );
};

export default React.memo(NumberField);
