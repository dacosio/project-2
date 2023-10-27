import React from "react";
import { AddSuggestionProps } from "./AddSuggestion.props";
import { Back, Container } from "./AddSuggestion.style";
import { useMultistepForm } from "../../../utils/hooks/useMultistepForm";
import AddSuggestionFirst from "../../base/AddSuggestionFirst";
import AddSuggestionSecond from "../../base/AddSuggestionSecond";
import AddSuggestionThird from "../../base/AddSuggestionThird";
import Typography from "../Typography";

const AddSuggestion = (props: AddSuggestionProps): JSX.Element => {
  const handleBack = () => {
    back();
  };

  const handleNext = () => {
    next();
  };

  const handleLater = () => {};

  const handleNow = () => {};

  const { step, back, next, isFirstStep } = useMultistepForm([
    <AddSuggestionFirst onNext={handleNext} />,
    <AddSuggestionSecond onNext={handleNext} />,
    <AddSuggestionThird onLater={handleLater} onNow={handleNow} />,
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

export default React.memo(AddSuggestion);
