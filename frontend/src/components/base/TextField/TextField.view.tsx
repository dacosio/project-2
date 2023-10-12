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
  RightComponentContainer,
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
    LeftComponent = null,
    RightComponent = null,
    prefix,
    className,
    onChange = () => null,
    onBlur = () => null,
    labelVariant,
    labelWeight,
    style,
    onKeyUp,
  } = props;
  const [showSecuredText, setShowSecuredText] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
    setValue(event.target.value);
  };

  const VisibilityIcon = showSecuredText ? EyeOff : Eye;
  const defaultInputType = type || "text";

  const [focus, setFocus] = useState(false);
  const handleFocus = () => {
    setFocus(true);
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocus(false);
    onBlur(e);
  };
  return (
    <Container className={className} style={style}>
      <Typography
        variant={labelVariant || "body"}
        textColor={"shade6"}
        weight={labelWeight || "500"}
        style={{ marginBottom: "4px" }}
      >
        {label}
      </Typography>
      <FieldContainer error={(error || "").length > 0} onFocus={handleFocus}>
        {LeftComponent && (
          <LeftComponentContainer focus={focus}>
            {LeftComponent}
          </LeftComponentContainer>
        )}
        {prefix && <Prefix>{prefix}</Prefix>}
        <Field
          name={name}
          type={secured && !showSecuredText ? "password" : defaultInputType}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          onKeyUp={onKeyUp}
        />
        {RightComponent && (
          <RightComponentContainer>{RightComponent}</RightComponentContainer>
        )}
        {secured && (
          <VisibilityContainer onClick={() => setShowSecuredText((v) => !v)}>
            <VisibilityIcon fill={theme.grey.shade7} />
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
