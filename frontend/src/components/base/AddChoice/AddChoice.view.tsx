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
    <AddChoiceFirst onNext={handleNext} />,
    <AddCropResult onLater={onLater} onNow={onNow} />,
  ]);

  return (
    <Container>
      {!isFirstStep && (
        <Back onClick={handleBack}>
          <Typography>&lt; Prev</Typography>
        </Back>
      )}
      {isFirstStep ? (
        <Modal isOpen={visibility} onClose={() => setVisibility(false)} padded>
          {step}
        </Modal>
      ) : (
        <Modal
          isOpen={visibility}
          onBack={() => handleBack()}
          onClose={() => setVisibility(false)}
          padded
        >
          {step}
        </Modal>
      )}
    </Container>
  );
};

export default React.memo(AddChoice);
