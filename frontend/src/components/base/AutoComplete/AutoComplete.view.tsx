import React, { ChangeEvent, useState } from "react";
import { AutoCompleteProps } from "./AutoComplete.props";
import {
  Container,
  IconContainer,
  InputContainer,
  InputText,
  ItemContainer,
  ListContainer,
  Error,
} from "./AutoComplete.style";
import { ArrowDown, ArrowUp } from "../SVG";
import Typography from "../Typography";

const AutoComplete = (props: AutoCompleteProps): JSX.Element => {
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

  const [visibility, setVisibility] = useState<boolean>(false);

  const items = options
    .filter((option) => option.includes(value || ""))
    .map((option, index) => (
      <ItemContainer onClick={() => handleSelect(option)} key={index}>
        <Typography>{option}</Typography>
      </ItemContainer>
    ));

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setVisibility(true);
    onChange(event);
  };

  const handleSelect = (option: string) => {
    setValue(option);
    setVisibility(false);
    const event = {
      target: {
        type: "text",
        value: option,
        name: name,
      },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange(event);
  };

  const handleToggle = () => {
    setVisibility((oldValue) => !oldValue);
  };

  return (
    <Container>
      <InputContainer>
        <InputText
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleInput}
          onBlur={onBlur}
          onFocus={handleInput}
        />
        <IconContainer onClick={handleToggle}>
          {visibility ? <ArrowUp /> : <ArrowDown />}
        </IconContainer>
      </InputContainer>
      {visibility && 0 < items.length && <ListContainer>{items}</ListContainer>}
      {error && (
        <Error variant="small" textColor="error">
          {error}
        </Error>
      )}
    </Container>
  );
};

export default React.memo(AutoComplete);
