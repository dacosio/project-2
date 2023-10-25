import React, { ChangeEvent, useState } from "react";
import { AutoCompleteProps } from "./AutoComplete.props";
import {
  Container,
  IconContainer,
  InputContainer,
  InputText,
  ItemContainer,
  ListContainer,
} from "./AutoComplete.style";
import { ArrowDown } from "../SVG";
import Typography from "../Typography";

const AutoComplete = (props: AutoCompleteProps): JSX.Element => {
  const {
    options,
    value,
    setValue = () => null,
    error,
    onChange = () => null,
    onBlur = () => null,
  } = props;

  const [visibility, setVisibility] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const items = options
    .filter((option) => option.label.includes(inputValue))
    .map((option, index) => (
      <ItemContainer onClick={() => handleSelect(option.label)} key={index}>
        <Typography>{option.label}</Typography>
      </ItemContainer>
    ));

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setVisibility(true);
  };

  const handleSelect = (label: string) => {
    setInputValue(label);
    setVisibility(false);
  };

  return (
    <Container>
      <InputContainer>
        <InputText
          value={inputValue}
          onChange={handleChange}
          onFocus={handleChange}
        />
        <IconContainer>
          <ArrowDown />
        </IconContainer>
      </InputContainer>
      {visibility && 0 < items.length && <ListContainer>{items}</ListContainer>}
    </Container>
  );
};

export default React.memo(AutoComplete);
