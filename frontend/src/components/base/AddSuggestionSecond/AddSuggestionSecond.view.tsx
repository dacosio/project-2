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
  storeCropId,
  storeCropName,
  storeNitrogen,
  storePh,
  storePhosphorus,
  storePotassium,
} from "../../../features/addCrop/addCropSlice";
import NumberField from "../NumberField";
import { usePredictCropMutation } from "../../../features/condition/conditionApiSlice";
import { selectCity } from "../../../features/location/locationSlice";
import Loading from "../Loading";

const AddSuggestionSecond = (props: AddSuggestionSecondProps): JSX.Element => {
  const { onNext } = props;

  const dispatch = useAppDispatch();

  const city = useAppSelector(selectCity);
  const month = useAppSelector(selectMonth);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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

  const [predict] = usePredictCropMutation();

  const handleSkip = async () => {
    setIsLoading(true);
    dispatch(storeNitrogen(null));
    dispatch(storePhosphorus(null));
    dispatch(storePotassium(null));
    dispatch(storePh(null));

    const response = await predict({
      city: city,
      month: month,
      N: null,
      P: null,
      K: null,
      ph: null,
    }).unwrap();

    console.log(response);

    if (response && response.cropId && response.cropName) {
      dispatch(storeCropId(response.cropId));
      dispatch(storeCropName(response.cropName));
      onNext();
    }
  };

  const handleNext = async () => {
    if (nitrogen && phosphorus && potassium && ph) {
      setIsLoading(true);
      dispatch(storeNitrogen(nitrogen));
      dispatch(storePhosphorus(phosphorus));
      dispatch(storePotassium(potassium));
      dispatch(storePh(ph));

      const response = await predict({
        city: city,
        month: month,
        N: nitrogen,
        P: phosphorus,
        K: potassium,
        ph: ph,
      }).unwrap();

      if (response && response.cropId && response.cropName) {
        dispatch(storeCropId(response.cropId));
        dispatch(storeCropName(response.cropName));
        onNext();
      }
    }
  };

  return (
    <>
      {isLoading && <Loading />}
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
          {isLoading ? (
            <Button text="Skip" variant="disabled" />
          ) : (
            <Button text="Skip" variant="outline" onClick={handleSkip} />
          )}
          {isLoading || !(nitrogen && phosphorus && potassium && ph) ? (
            <Button text="Next" variant="disabled" />
          ) : (
            <Button text="Next" onClick={handleNext} />
          )}
        </Footer>
      </Container>
    </>
  );
};

export default React.memo(AddSuggestionSecond);
