import React, { useState } from "react";
import { AddSuggestionSecondProps } from "./AddSuggestionSecond.props";
import { Body, Container, Footer, Header } from "./AddSuggestionSecond.style";
import Typography from "../Typography";
import TextField from "../TextField";
import Button from "../Button";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectNitrogen,
  selectPh,
  selectPhosphorus,
  selectPotassium,
  storeCrop,
  storeNitrogen,
  storePh,
  storePhosphorus,
  storePotassium,
} from "../../../features/addSuggestion/addCropSlice";
import { Crop } from "../../../types/store/CropState";
import NumberField from "../NumberField";

const AddSuggestionSecond = (props: AddSuggestionSecondProps): JSX.Element => {
  const { onNext } = props;

  const dispatch = useAppDispatch();

  const [nitrogen, setNitrogen] = useState<string | undefined>(
    useAppSelector(selectNitrogen)
  );
  const [phosphorus, setPhosphorus] = useState<string | undefined>(
    useAppSelector(selectPhosphorus)
  );
  const [potassium, setPotassium] = useState<string | undefined>(
    useAppSelector(selectPotassium)
  );
  const [ph, setPh] = useState<string | undefined>(useAppSelector(selectPh));

  const getCrop = () => {
    const crop: Crop = {
      _id: "id",
      cropName: "Tomato",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis quam vel risus accumsan iaculis. Nullam semper feugiat mi, non commodo massa fringilla sit amet. Aliquam efficitur quis metus semper posuere. Mauris dictum laoreet rhoncus. In mauris velit, laoreet eget augue et, posuere feugiat lectus. Proin blandit lacus nec velit tincidunt molestie. Integer et auctor urna.",
      idealTemperature: {
        fahrenheit: { min: 10, max: 20 },
        celcius: { min: 10, max: 20 },
      },
      humidity: { min: 10, max: 20 },
      growthDuration: { min: 2, max: 3 },
      soilPh: { min: 5.5, max: 6.5 },
      soilN: 5,
      soilP: 8,
      soilK: 6,
      growingTips: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Duis mollis quam vel risus accumsan iaculis.",
        "Nullam semper feugiat mi, non commodo massa fringilla sit amet.",
      ],
      tools: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Duis mollis quam vel risus accumsan iaculis.",
        "Nullam semper feugiat mi, non commodo massa fringilla sit amet.",
      ],
      imageURL: "https://picsum.photos/300",
      userId: "",
      isFavorite: false,
      isPlanted: false,
      datePlanted: new Date(),
      estimatedYield: "",
      __v: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    dispatch(storeCrop(crop));
  };

  const handleSkip = () => {
    dispatch(storeNitrogen(null));
    dispatch(storePhosphorus(null));
    dispatch(storePotassium(null));
    dispatch(storePh(null));
    getCrop();
    onNext();
  };

  const handleNext = () => {
    dispatch(storeNitrogen(nitrogen));
    dispatch(storePhosphorus(phosphorus));
    dispatch(storePotassium(potassium));
    dispatch(storePh(ph));
    getCrop();
    onNext();
  };

  return (
    <Container>
      <Header>
        <Typography variant="title3" weight="700">
          Your Planting Conditions
        </Typography>
        <Typography>
          This step is optional but we can give you a more precise crop
          suggestion if it's done!
        </Typography>
      </Header>
      <Body>
        <div>
          <Typography weight="500">Nitrogen (N)</Typography>
          <NumberField value={nitrogen} setValue={setNitrogen} />
        </div>
        <div>
          <Typography weight="500">Phosphorus (P)</Typography>
          <NumberField value={phosphorus} setValue={setPhosphorus} />
        </div>
        <div>
          <Typography weight="500">Potassium (K)</Typography>
          <NumberField value={potassium} setValue={setPotassium} />
        </div>
        <div>
          <Typography weight="500">pH</Typography>
          <NumberField value={ph} setValue={setPh} />
        </div>
      </Body>
      <Footer>
        <Button text="Skip" variant="outline" onClick={handleSkip} />
        {nitrogen && phosphorus && potassium && ph ? (
          <Button text="Next" onClick={handleNext} />
        ) : (
          <Button text="Next" variant="disabled" />
        )}
      </Footer>
    </Container>
  );
};

export default React.memo(AddSuggestionSecond);
