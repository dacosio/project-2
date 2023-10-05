import React, { useState } from 'react';
import { CheckboxProps } from './Checkbox.props';
import { Container, CustomCheckbox } from './Checkbox.style';

const Checkbox = (props: CheckboxProps): JSX.Element => {
  const { checkboxStatus, setCheckboxStatus } = props;

  const answerBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxStatus(e.target.checked)
  }

  return <Container>

    <CustomCheckbox
      type="checkbox"
      id="checkboxBox"
      checked={checkboxStatus}
      onChange={answerBox}
    />

  </Container>;
};

export default React.memo(Checkbox);
