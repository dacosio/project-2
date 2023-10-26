import React, { useEffect, useState } from "react";
import { AddSuggestionFirstProps } from "./AddSuggestionFirst.props";
import { Body, Container, Footer, Header } from "./AddSuggestionFirst.style";
import Typography from "../Typography";
import LocationSearch from "../../module/LocationSearch";
import DropDown from "../DropDown";
import Button from "../Button";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectDay,
  selectLocation,
  selectMonth,
  storeDay,
  storeMonth,
} from "../../../features/addSuggestion/addSuggestionSlice";

const AddSuggestionFirst = (props: AddSuggestionFirstProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const location = useAppSelector(selectLocation);
  const month = useAppSelector(selectMonth);
  const day = useAppSelector(selectDay);

  const [year, setYear] = useState<number | undefined>(undefined);
  const [inputMonth, setInputMonth] = useState<string | undefined>(undefined);
  const [inputDay, setInputDay] = useState<string | undefined>(undefined);
  const [days, setDays] = useState<{ label: string; value: string }[]>([]);

  const months = [
    { value: "0", label: "January" },
    { value: "1", label: "February" },
    { value: "2", label: "March" },
    { value: "3", label: "April" },
    { value: "4", label: "May" },
    { value: "5", label: "June" },
    { value: "6", label: "July" },
    { value: "7", label: "August" },
    { value: "8", label: "September" },
    { value: "9", label: "October" },
    { value: "10", label: "November" },
    { value: "11", label: "December" },
  ];

  const test = (
    <DropDown
      options={months}
      placeholder="Month"
      value={inputMonth}
      setValue={setInputMonth}
    />
  );

  const resetDays = (year: number, month: number) => {
    const maxDay = new Date(year, month + 1, 0).getDate();
    const tempDays: { label: string; value: string }[] = [];
    for (let i = 1; i <= maxDay; i++) {
      tempDays.push({
        label: i.toString(),
        value: i.toString(),
      });
    }
    setDays(tempDays);
  };

  const handleNext = () => {
    dispatch(storeMonth(inputMonth));
    dispatch(storeDay(inputDay));
  };

  useEffect(() => {
    if (year && inputMonth) {
      resetDays(year, Number(inputMonth));
    }
  }, [year, inputMonth]);

  useEffect(() => {
    setInputMonth(month);
    setInputDay(day);
  }, [month, day, test]);

  useEffect(() => {
    console.log(inputMonth);
  }, [inputMonth]);

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

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
          <div>
            {test}
            <DropDown
              options={days}
              placeholder="Day"
              value={inputDay}
              setValue={setInputDay}
            />
          </div>
        </div>
      </Body>
      <Footer>
        {inputMonth && inputDay ? (
          <Button text="Next" onClick={handleNext} />
        ) : (
          <Button text="Next" variant="disabled" />
        )}
      </Footer>
    </Container>
  );
};

export default React.memo(AddSuggestionFirst);
