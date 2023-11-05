import React from "react";
import { SingleHourlyWeatherProps } from "./SingleHourlyWeather.props";
import {
  Container,
  TemperatureContainer,
  WeatherContainer,
  TimeContainer,
  DayNameContainer,
  DayDateContainer,
  DayNameDateContainer,
} from "./SingleHourlyWeather.style";
import Typography from "../Typography";
import {
  ClearInactive,
  Cloudy,
  OvercastInactive,
  PartiallyCloudy,
  PartiallyCloudyInactive,
  RainInactive,
  SnowInactive,
  SnowRainInactive,
  ThunderStormInactive,
} from "../SVG";

const SingleHourlyWeather = (props: SingleHourlyWeatherProps): JSX.Element => {
  const {
    time,
    dayName,
    dayDate,
    condition,
    temperature,
    state,
    selectedIndex,
    index,
    onClickControl,
  } = props;
  const MOCK_OPTIONS = ["Today", "15-day"];
  let currentCondition = "";

  if (condition.toLowerCase().includes("clear".toLowerCase())) {
    currentCondition = "clear";
  } else if (condition.toLowerCase().includes("Snow".toLowerCase())) {
    currentCondition = "snow";
  } else if (
    condition.toLowerCase().includes("Rain".toLowerCase()) ||
    condition.toLowerCase() === "rain, partially cloudy".toLowerCase() ||
    condition.toLowerCase() === "Rain, Overcast".toLowerCase()
  ) {
    currentCondition = "rain";
  } else if (
    condition.toLowerCase().includes("Partially cloudy".toLowerCase())
  ) {
    currentCondition = "partiallyCloudy";
  } else if (condition.toLowerCase().includes("Overcast".toLowerCase())) {
    currentCondition = "overcast";
  } else if (condition.toLowerCase().includes("Thunderstorm".toLowerCase())) {
    currentCondition = "thunderStorm";
  } else if (
    condition.toLowerCase().includes("Heavy Rain and Snow".toLowerCase())
  ) {
    currentCondition = "snowRain";
  } else if (
    condition.toLowerCase().includes("Thunderstorm and rain".toLowerCase())
  ) {
    currentCondition = "thunderStormRain";
  }
  return (
    <Container
      active={index === selectedIndex}
      onClick={() => onClickControl(index)}
    >
      {state === MOCK_OPTIONS[0] && (
        <TimeContainer>
          {/* <Typography variant="body" align="center" textColor="white"> */}
          {time}
          {/* </Typography> */}
        </TimeContainer>
      )}

      {state === MOCK_OPTIONS[1] && (
        <DayNameDateContainer>
          <DayNameContainer>
            {/* <Typography variant="body" align="center" textColor="white"> */}
            {dayName}
            {/* </Typography> */}
          </DayNameContainer>

          <DayDateContainer>
            {/* <Typography variant="body" align="center" textColor="white"> */}
            {dayDate}
            {/* </Typography> */}
          </DayDateContainer>
        </DayNameDateContainer>
      )}

      <WeatherContainer>
        {currentCondition === "clear" ? (
          <ClearInactive width={30} height={30} />
        ) : currentCondition === "partiallyCloudy" ? (
          <PartiallyCloudyInactive width={30} height={30} />
        ) : currentCondition === "overcast" ? (
          <OvercastInactive width={30} height={30} />
        ) : currentCondition === "rain" ? (
          <RainInactive width={30} height={30} />
        ) : currentCondition === "thunderStorm" ? (
          <ThunderStormInactive width={30} height={30} />
        ) : currentCondition === "snow" ? (
          <SnowInactive width={30} height={30} />
        ) : currentCondition === "snowRain" ? (
          <SnowRainInactive width={30} height={30} />
        ) : currentCondition === "thunderStormRain" ? (
          <ThunderStormInactive width={30} height={30} />
        ) : (
          <PartiallyCloudy width={30} height={30} />
        )}
      </WeatherContainer>
      <TemperatureContainer>
        {/* <Typography variant="body" align="center" textColor="white"> */}
        {temperature}°{/* </Typography> */}
      </TemperatureContainer>
    </Container>
  );
};

export default React.memo(SingleHourlyWeather);
