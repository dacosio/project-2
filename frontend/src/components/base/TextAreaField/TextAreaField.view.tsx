import React, { ChangeEvent } from "react";
import { TextAreaFieldProps } from "./TextAreaField.props";
import { Container, TextArea, Error } from "./TextAreaField.style";
import { useTheme } from "../../../utils/Theme";
import Typography from "../Typography";

const TextAreaField = (props: TextAreaFieldProps): JSX.Element => {
  const {
    name,
    label,
    children,
    setValue = () => null,
    placeholder,
    error,
    className,
    onChange = () => null,
    onBlur = () => null,
    style,
  } = props;

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event);
    setValue(event.target.value);
  };

  return (
    <Container className={className} style={style}>
      <Typography variant="title4" color="shade6">
        {label}
      </Typography>
      <TextArea
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        onBlur={onBlur}
      >
        {children}
      </TextArea>
      {error && (
        <Error variant="subtitle" color="error">
          {error}
        </Error>
      )}
    </Container>
  );
};

export default React.memo(TextAreaField);
