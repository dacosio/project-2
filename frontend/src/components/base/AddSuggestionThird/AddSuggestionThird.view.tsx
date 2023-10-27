import React, { useState } from "react";
import { AddSuggestionThirdProps } from "./AddSuggestionThird.props";
import { Body, Container, Footer } from "./AddSuggestionThird.style";
import CropInformation from "../../../components/module/CropInformation";
import { Crop } from "../../../types/store/CropState";
import { useAppSelector } from "../../../app/hooks";
import { selectCrop } from "../../../features/addSuggestion/addSuggestionSlice";
import Button from "../Button";

const AddSuggestionThird = (props: AddSuggestionThirdProps): JSX.Element => {
  const { onLater, onNow } = props;

  const [crop] = useState<Crop | undefined>(useAppSelector(selectCrop));

  const handleLater = () => {
    onLater();
  };

  const handleNow = () => {
    onNow();
  };

  return (
    <Container>
      <Body>
        {crop && (
          <CropInformation
            temperature={`${crop.idealTemperature.celcius.min} - ${crop.idealTemperature.celcius.max}`}
            humidity={`${crop.humidity.min} - ${crop.humidity.max}`}
            growthDuration={`${crop.growthDuration.min} - ${crop.growthDuration.max}`}
            ph={`${crop.soilPh.min} - ${crop.soilPh.max}`}
            nitrogen={crop.soilN.toString()}
            phosphorus={crop.soilP.toString()}
            potassium={crop.soilK.toString()}
            suggestions={crop.tools}
            tips={crop.growingTips}
          />
        )}
      </Body>
      <Footer>
        <Button text="Plant Later" variant="outline" onClick={handleLater} />
        <Button text="Plant Now" onClick={handleNow} />
      </Footer>
    </Container>
  );
};

export default React.memo(AddSuggestionThird);
