import React from "react";
import { AddChoiceProps } from "./AddChoice.props";
import { Back, Container } from "./AddChoice.style";
import { useMultistepForm } from "../../../utils/hooks/useMultistepForm";
import AddChoiceFirst from "../AddChoiceFirst";
import AddCropResult from "../AddCropResult";
import Typography from "../Typography";
import Modal from "../Modal";

const AddChoice = (props: AddChoiceProps): JSX.Element => {
  const { visibility, setVisibility, onLater, onNow } = props;

  const handleBack = () => {
    back();
  };

  const handleNext = () => {
    next();
  };

  const { step, back, next, isFirstStep } = useMultistepForm([
    <Modal isOpen={visibility} onClose={() => setVisibility(false)} padded>
      <AddChoiceFirst onNext={handleNext} />
    </Modal>,
    <Modal
      isOpen={visibility}
      onBack={() => back()}
      onClose={() => setVisibility(false)}
      padded
    >
      <AddCropResult onLater={onLater} onNow={onNow} />
    </Modal>,
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
