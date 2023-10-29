import React, { useEffect, useState } from "react";
import { AddSuggestionSecondProps } from "./AddSuggestionSecond.props";
import { Body, Container, Footer, Header } from "./AddSuggestionSecond.style";
import Typography from "../Typography";
import Button from "../Button";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectMonth,
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
import { useGetPredictCropQuery } from "../../../features/condition/conditionApiSlice";
import { selectCity } from "../../../features/location/locationSlice";
import { useGetCropAboutQuery } from "../../../features/cropEncyclopedia/cropEncyclopediaApiSlice";

const AddSuggestionSecond = (props: AddSuggestionSecondProps): JSX.Element => {
  const { onNext } = props;

  const dispatch = useAppDispatch();

  const city = useAppSelector(selectCity);
  const month = useAppSelector(selectMonth);

  const [cropId, setCropId] = useState<string>("");
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

  const { data: predictData } = useGetPredictCropQuery(
    nitrogen && phosphorus && potassium && ph
      ? {
          city: city,
          month: month,
          N: nitrogen,
          P: phosphorus,
          K: potassium,
          ph: ph,
        }
      : {
          city: city,
          month: month,
        }
  );
  const { data: cropData } = useGetCropAboutQuery(cropId);

  const handleSkip = () => {
    dispatch(storeNitrogen(null));
    dispatch(storePhosphorus(null));
    dispatch(storePotassium(null));
    dispatch(storePh(null));
    onNext();
  };

  const handleNext = () => {
    dispatch(storeNitrogen(nitrogen));
    dispatch(storePhosphorus(phosphorus));
    dispatch(storePotassium(potassium));
    dispatch(storePh(ph));
    onNext();
  };

  useEffect(() => {
    if (predictData) {
      const item = predictData as { cropId: string; cropName: string };
      setCropId(item.cropId);
    }
  }, [predictData]);

  useEffect(() => {
    if (cropId && cropData) {
      const item = cropData as Crop[];
      dispatch(storeCrop(item[0]));
    }
  }, [cropData]);

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
