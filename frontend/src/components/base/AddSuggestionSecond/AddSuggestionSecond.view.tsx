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
  storeNitrogen,
  storePh,
  storePhosphorus,
  storePotassium,
} from "../../../features/addSuggestion/addSuggestionSlice";

const AddSuggestionSecond = (props: AddSuggestionSecondProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const [nitrogen, setNitrogen] = useState<string>(
    useAppSelector(selectNitrogen)
  );
  const [phosphorus, setPhosphorus] = useState<string>(
    useAppSelector(selectPhosphorus)
  );
  const [potassium, setPotassium] = useState<string>(
    useAppSelector(selectPotassium)
  );
  const [ph, setPh] = useState<string>(useAppSelector(selectPh));

  const handleNext = () => {
    dispatch(storeNitrogen(nitrogen));
    dispatch(storePhosphorus(phosphorus));
    dispatch(storePotassium(potassium));
    dispatch(storePh(ph));
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
          <div>
            <TextField value={nitrogen} setValue={setNitrogen} />
            <Typography weight="400">unit</Typography>
          </div>
        </div>
        <div>
          <Typography weight="500">Phosphorus (P)</Typography>
          <div>
            <TextField value={phosphorus} setValue={setPhosphorus} />
            <Typography weight="400">unit</Typography>
          </div>
        </div>
        <div>
          <Typography weight="500">Potassium (K)</Typography>
          <div>
            <TextField value={potassium} setValue={setPotassium} />
            <Typography weight="400">unit</Typography>
          </div>
        </div>
        <div>
          <Typography weight="500">pH</Typography>
          <div>
            <TextField value={ph} setValue={setPh} />
          </div>
        </div>
      </Body>
      <Footer>
        <Button text="Skip" variant="outline" />
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
