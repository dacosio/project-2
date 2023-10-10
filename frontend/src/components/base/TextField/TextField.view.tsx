import React, { useState } from "react";

import { Eye, EyeOff } from "../SVG";
import Typography from "../Typography";
import { useTheme } from "../../../utils/Theme";

import { TextFieldProps } from "./TextField.props";
import {
  Container,
  LeftComponentContainer,
  FieldContainer,
  Field,
  VisibilityContainer,
  Error,
  Prefix,
  LabelContainer,
} from "./TextField.style";
const TextField = (props: TextFieldProps): JSX.Element => {
  const theme = useTheme();
  const {
    name,
    type,
    label,
    value,
    setValue = () => null,
    placeholder,
    secured,
    error,
    leftComponent,
    rightComponent,
    prefix,
    className,
    onChange = () => null,
    onBlur = () => null,
    style,
  } = props;
  const [showSecuredText, setShowSecuredText] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
    setValue(event.target.value);
  };

  const VisibilityIcon = showSecuredText ? EyeOff : Eye;
  const defaultInputType = type || "text";
  return (
    <Container className={className} style={style}>
      <LabelContainer>
        <Typography variant="small" textColor="shade9">
          {label}
        </Typography>
        {rightComponent && rightComponent}
      </LabelContainer>
      <FieldContainer error={(error || "").length > 0}>
        {leftComponent && (
          <LeftComponentContainer>{leftComponent}</LeftComponentContainer>
        )}
        {prefix && <Prefix>{prefix}</Prefix>}
        <Field
          name={name}
          type={secured && !showSecuredText ? "password" : defaultInputType}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
        {secured && (
          <VisibilityContainer onClick={() => setShowSecuredText((v) => !v)}>
            <VisibilityIcon width={24} height={24} fill={theme.grey.shade9} />
          </VisibilityContainer>
        )}
      </FieldContainer>
      {(error || "").length > 0 && (
        <Error variant="small" textColor="error">
          {error}
        </Error>
      )}
    </Container>
  );
};

export default React.memo(TextField);
