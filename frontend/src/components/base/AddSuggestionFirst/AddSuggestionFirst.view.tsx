import React, { useEffect, useState } from "react";
import { AddSuggestionFirstProps } from "./AddSuggestionFirst.props";
import { Body, Container, Footer, Header } from "./AddSuggestionFirst.style";
import Typography from "../Typography";
import LocationSearch from "../../module/LocationSearch";
import DropDown from "../DropDown";
import Button from "../Button";

const AddSuggestionFirst = (props: AddSuggestionFirstProps): JSX.Element => {
  const [year, setYear] = useState<number | undefined>(undefined);
  const [month, setMonth] = useState<string | undefined>(undefined);
  const [day, setDay] = useState<string | undefined>(undefined);
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

  useEffect(() => {
    if (year && month) {
      const maxDay = new Date(year, Number(month) + 1, 0).getDate();
      const tempDays: { label: string; value: string }[] = [];
      for (let i = 1; i <= maxDay; i++) {
        tempDays.push({
          label: i.toString(),
          value: i.toString(),
        });
      }
      setDays(tempDays);
    }
  }, [month]);

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
            <DropDown
              options={months}
              placeholder="Month"
              value={month}
              setValue={setMonth}
            />
            <DropDown
              options={days}
              placeholder="Day"
              value={day}
              setValue={setDay}
            />
          </div>
        </div>
      </Body>
      <Footer>
        {month && day ? (
          <Button text="Next" />
        ) : (
          <Button text="Next" variant="disabled" />
        )}
      </Footer>
    </Container>
  );
};

export default React.memo(AddSuggestionFirst);
