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
    <>
      {isFirstStep ? (
        <Modal
          width="25vw"
          isOpen={visibility}
          onClose={() => setVisibility(false)}
          padded
        >
          {step}
        </Modal>
      ) : (
        <Modal
          width="25vw"
          isOpen={visibility}
          onBack={() => handleBack()}
          onClose={() => setVisibility(false)}
          padded
        >
          {step}
        </Modal>
      )}
    </>
  );
};

export default React.memo(AddChoice);
