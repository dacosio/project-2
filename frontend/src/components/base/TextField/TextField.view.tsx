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
    prefix,
    LeftComponent,
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
      <Typography variant="title4" color={"shade6"}>
        {label}
      </Typography>
      <FieldContainer error={(error || "").length > 0}>
        {LeftComponent && (
          <LeftComponentContainer>{LeftComponent}</LeftComponentContainer>
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
            <VisibilityIcon fill={theme.grey.shade7} />
          </VisibilityContainer>
        )}
      </FieldContainer>
      {(error || "").length > 0 && (
        <Error variant="subtitle" color="error">
          {error}
        </Error>
      )}
    </Container>
  );
};

export default React.memo(TextField);
