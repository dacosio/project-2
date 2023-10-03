import React, { useState } from 'react';
import { CheckboxProps } from './Checkbox.props';
import { Container, CustomCheckbox, Label } from './Checkbox.style';

const Checkbox = (props: CheckboxProps): JSX.Element => {
  const [checkboxStatus, setCheckboxStatus] = useState(false);

  const answerBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setCheckboxStatus(e.target.checked)
  }

  return <Container>

    <CustomCheckbox
      type="checkbox"
      id="checkboxBox"
      checked={checkboxStatus}
      onChange={answerBox}
    />

    <Label htmlFor="checkboxBox">True</Label>

  </Container>;
};

export default React.memo(Checkbox);
