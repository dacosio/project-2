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
  storeMonth,
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
    if (address && date) {
      dispatch(storeDate(date));
      const months: { [key: string]: string } = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December",
      };
      dispatch(storeMonth(months[date.split("-")[1]]));
      onNext();
    }
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
          <LocationSearch
            onClickControl={(value) => {
              console.log(`AddSuggestionFirst : ${value}`);
            }}
          />
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
