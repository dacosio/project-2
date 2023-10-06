import React from "react";
import { TextAreaFieldProps } from "./TextAreaField.props";
import { Container, TextArea, Error } from "./TextAreaField.style";
import { useTheme } from "../../../utils/Theme";
import Typography from "../Typography";

const TextAreaField = (props: TextAreaFieldProps): JSX.Element => {
  const theme = useTheme();
  const {
    id,
    label,
    setValue = () => null,
    placeholder,
    className = undefined,
    onChange = () => null,
    onBlur = () => null,
    children,
    error = "",
    style,
  } = props;

  return (
    <Container className={className} style={style}>
      <Typography variant="title4" color={"shade6"}>
        {label}
      </Typography>
      <TextArea>{children}</TextArea>
      {error && (
        <Error variant="subtitle" color="error">
          {error}
        </Error>
      )}
    </Container>
  );
};

export default React.memo(TextAreaField);
