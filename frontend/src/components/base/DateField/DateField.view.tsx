import React, { ChangeEvent } from "react";
import { DateFieldProps } from "./DateField.props";
import { Container, Date, Error } from "./DateField.style";

const DateField = (props: DateFieldProps): JSX.Element => {
  const {
    name,
    value,
    setValue = () => null,
    error,
    onChange = () => null,
    onBlur = () => null,
  } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event);
  };

  return (
    <Container>
      <Date
        type="date"
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
      />
      {error && (
        <Error variant="small" textColor="error">
          {error}
        </Error>
      )}
    </Container>
  );
};

export default React.memo(DateField);
