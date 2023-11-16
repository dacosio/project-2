import React, { useEffect, useState } from "react";
import { HourlyDailyProps } from "./HourlyDaily.props";
import {
  Container,
  WeatherDataContainer,
  TypographyContainer,
} from "./HourlyDaily.style";
import SingleHourlyWeather from "../../base/SingleHourlyWeather";
import Typography from "../../base/Typography";

const HourlyDaily = (props: HourlyDailyProps): JSX.Element => {
  const {
    weatherDataArray,
    state,
    onSelectedWeatherIndex,
    index,
    page,
    ...hourlyDailyProps
  } = props;
  let weatherDataFilteredArray: Array<{ [key: string]: any }>;

  const MOCK_OPTIONS = ["Today", "15-day"];

  let description = "";
  console.log(state);
  console.log(weatherDataArray);

  if (state === MOCK_OPTIONS[0]) {
    weatherDataFilteredArray = weatherDataArray.hours;
    description = weatherDataArray.description;
  } else {
    weatherDataFilteredArray = weatherDataArray.days;
    description = weatherDataFilteredArray[index].description;
  }

  const getCurrentHour24Format = () => {
    const now = new Date();
    // console.log(now);
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      hour12: false,
    };
    const hour24 = new Intl.DateTimeFormat("en-GB", options).format(now);
    // console.log(datetime);
    return hour24; // This will return the hour part only, like "03" or "15"
  };

  const getIndex = () => {
    if (state === MOCK_OPTIONS[0]) {
      const currentTimeIndex = parseInt(getCurrentHour24Format());
      return currentTimeIndex;
    } else {
      return 0;
    }
  };
  const [selectedIndex, setSelectedIndex] = useState(getIndex());
  useEffect(() => {
    setSelectedIndex(getIndex());
  }, [state]);

  const getTime = (datetime: string, state: string) => {
    if (state === MOCK_OPTIONS[0]) {
      const [hour, minutes] = datetime.split(":");

      // Create a Date object at the current date with the specified time
      const date = new Date();
      date.setHours(parseInt(hour));
      date.setMinutes(parseInt(minutes));

      // Options to return the time in 12-hour format with the period (AM/PM)
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };

      // 'en-US' locale uses the 12-hour format with AM/PM
      let time12Hour = new Intl.DateTimeFormat("en-US", options).format(date);

      // Remove minutes, colon, and any leading zeros from the hour
      time12Hour = time12Hour.replace(":00", "").replace(/^0+/, "");

      return time12Hour;
    } else {
      return " ";
    }
  };

  const getDayName = (datetime: string, state: string) => {
    if (state === MOCK_OPTIONS[1]) {
      // Assuming 'dateString' is in 'YYYY-MM-DD' format
      const date = new Date(datetime);

      // Options to return the weekday
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long", // 'long' represents the full name of the day
      };

      // 'en-US' locale. You can change this to another locale if you want the day in another language.
      return new Intl.DateTimeFormat("en-US", options).format(date);
    } else {
      return " ";
    }
  };

  const getDayDate = (datetime: string, state: string) => {
    if (state === MOCK_OPTIONS[1]) {
      // Assuming 'dateString' is in 'YYYY-MM-DD' format
      const date = new Date(datetime);

      // Options to return the day of the month and the short month name
      const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short", // 'short' gives the month in abbreviated form (e.g., "Oct")
      };

      // 'en-US' locale. You can change this to another locale if you want the month name in another language.
      return new Intl.DateTimeFormat("en-US", options).format(date);
    } else {
      return " ";
    }
  };

  return (
    <Container page={page}>
      <TypographyContainer>
        <Typography variant="body">{description}</Typography>
      </TypographyContainer>

      <WeatherDataContainer>
        {weatherDataFilteredArray.map(
          (obj: { [key: string]: any }, index: any) => (
            <SingleHourlyWeather
              time={getTime(obj.datetime, state)}
              // time={obj.datetime}
              dayName={getDayName(obj.datetime, state)}
              dayDate={getDayDate(obj.datetime, state)}
              condition={obj.conditions}
              temperature={obj.temp}
              state={state}
              selectedIndex={selectedIndex}
              index={index}
              onClickControl={(value) => {
                onSelectedWeatherIndex(value);
                setSelectedIndex(value);
                description = weatherDataFilteredArray[value].description;
              }}
            ></SingleHourlyWeather>
          )
        )}{" "}
      </WeatherDataContainer>
    </Container>
  );
};

export default React.memo(HourlyDaily);
