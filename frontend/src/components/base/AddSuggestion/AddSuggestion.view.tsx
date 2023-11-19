import React from "react";
import { AddSuggestionProps } from "./AddSuggestion.props";
import { useMultistepForm } from "../../../utils/hooks/useMultistepForm";
import AddSuggestionFirst from "../../base/AddSuggestionFirst";
import AddSuggestionSecond from "../../base/AddSuggestionSecond";
import AddCropResult from "../AddCropResult";
import Modal from "../Modal";

const AddSuggestion = (props: AddSuggestionProps): JSX.Element => {
  const { visibility, setVisibility, onLater, onNow } = props;

  const handleBack = () => {
    back();
  };

  const handleNext = () => {
    next();
  };

  const { step, back, next, isFirstStep } = useMultistepForm([
    <AddSuggestionFirst onNext={handleNext} />,
    <AddSuggestionSecond onNext={handleNext} />,
    <AddCropResult onLater={onLater} onNow={onNow} suggested />,
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
          width="30vw"
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

export default React.memo(AddSuggestion);
