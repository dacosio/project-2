import React, { useState } from "react";
import { AddSuggestionFirstProps } from "./AddSuggestionFirst.props";
import { Body, Container, Footer, Header } from "./AddSuggestionFirst.style";
import Typography from "../Typography";
import LocationSearch from "../../module/LocationSearch";
import Button from "../Button";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectDate,
  storeDate,
} from "../../../features/addSuggestion/addCropSlice";
import DateField from "../DateField";
import { selectAddress } from "../../../features/location/locationSlice";

const AddSuggestionFirst = (props: AddSuggestionFirstProps): JSX.Element => {
  const { onNext } = props;

  const dispatch = useAppDispatch();

  const address = useAppSelector(selectAddress);
  const [date, setDate] = useState<string | undefined>(
    useAppSelector(selectDate)
  );

  const handleNext = () => {
    dispatch(storeDate(date));
    onNext();
  };

  return (
    <Container>
      <Header>
        <Typography variant="title3" weight="700">
          Get Our Crop Suggestion
        </Typography>
        <Typography>
          We will suggest the ideal crops for you to grow based on your planting
          conditions
        </Typography>
      </Header>
      <Body>
        <div>
          <Typography weight="500">
            Where is your planting area located?
          </Typography>
          <LocationSearch />
        </div>
        <div>
          <Typography weight="500">When are you planting the crop?</Typography>
          <DateField value={date} setValue={setDate} />
        </div>
      </Body>
      <Footer>
        {address && date ? (
          <Button text="Next" onClick={handleNext} />
        ) : (
          <Button text="Next" variant="disabled" />
        )}
      </Footer>
    </Container>
  );
};

export default React.memo(AddSuggestionFirst);
