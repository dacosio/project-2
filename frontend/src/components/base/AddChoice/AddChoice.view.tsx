import React from "react";
import { AddChoiceProps } from "./AddChoice.props";
import { Back, Container } from "./AddChoice.style";
import { useMultistepForm } from "../../../utils/hooks/useMultistepForm";
import AddChoiceFirst from "../AddChoiceFirst";
import AddCropResult from "../AddCropResult";
import Typography from "../Typography";

const AddChoice = (props: AddChoiceProps): JSX.Element => {
  const handleBack = () => {
    back();
  };

  const handleNext = () => {
    next();
  };

  const handleLater = () => {};

  const handleNow = () => {};

  const { step, back, next, isFirstStep } = useMultistepForm([
    <AddChoiceFirst onNext={handleNext} />,
    <AddCropResult onLater={handleLater} onNow={handleNow} />,
  ]);

  return (
    <Container>
      {!isFirstStep && (
        <Back onClick={handleBack}>
          <Typography>&lt; Prev</Typography>
        </Back>
      )}
      {step}
    </Container>
  );
};

export default React.memo(AddChoice);
