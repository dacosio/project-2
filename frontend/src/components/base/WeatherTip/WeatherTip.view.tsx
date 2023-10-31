import React from "react";
import { WeatherTipProps } from "./WeatherTip.props";
import { BottomContainer, Container, TopContainer } from "./WeatherTip.style";
import Typography from "../Typography";
import {
  Clear,
  Overcast,
  PartiallyCloudy,
  Rain,
  Snow,
  SnowRain,
  ThunderStorm,
  ThunderStormRain,
} from "../SVG";

const WeatherTip = (props: WeatherTipProps): JSX.Element => {
  const { condition, ...weatherTipProps } = props;
  let currentTip = "";
  let currentCondition = "";
  console.log(`Weather tip : ${condition}`);

  const tips = {
    clear:
      "Provide shade and adequate irrigation for crops to prevent heat stress.",
    partiallyCloudy:
      "Adjust planting schedules to match local climate patterns for optimal crop growth.",
    overcast:
      "Be vigilant for signs of pests and diseases in humid weather; use appropriate controls.",
    rain: "Ensure proper drainage to prevent waterlogged roots and disease.",
    thunderStorm:
      "Ensure proper drainage to prevent waterlogged roots and disease.",
    snow: "Protect sensitive crops with frost covers or greenhouses.",
    snowRain:
      "Use a bucket of any kind and turn them upside down over your crops to protect them from freezing rain and sleet.",
    thunderStormRain:
      "When covering your plants, weigh these covers so they can stay in place despite harsh winds.",
  };

  if (condition.toLowerCase() === "clear".toLowerCase()) {
    currentCondition = "clear";
  } else if (condition.toLowerCase() === "Partially cloudy".toLowerCase()) {
    currentCondition = "partiallyCloudy";
  } else if (condition.toLowerCase() === "Overcast".toLowerCase()) {
    currentCondition = "overcast";
  } else if (
    condition.toLowerCase() === "Rain".toLowerCase() ||
    condition.toLowerCase() === "rain, partially cloudy".toLowerCase() ||
    condition.toLowerCase() === "Rain, Overcast".toLowerCase()
  ) {
    currentCondition = "rain";
  } else if (condition.toLowerCase() === "Thunderstorm".toLowerCase()) {
    currentCondition = "thunderStorm";
  } else if (condition.toLowerCase() === "Snow".toLowerCase()) {
    currentCondition = "snow";
  } else if (condition.toLowerCase() === "Heavy Rain and Snow".toLowerCase()) {
    currentCondition = "snowRain";
  } else if (
    condition.toLowerCase() === "Thunderstorm and rain".toLowerCase()
  ) {
    currentCondition = "thunderStormRain";
  }
  return (
    <Container>
      {" "}
      <TopContainer>
        <Typography
          variant="body"
          textColor="n90"
          style={{
            fontFamily: "Inter",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "22px",
          }}
        >
          Weather Tip
        </Typography>

        {currentCondition === "clear" ? (
          <Clear width={64} height={68} />
        ) : currentCondition === "partiallyCloudy" ? (
          <PartiallyCloudy width={64} height={68} />
        ) : currentCondition === "overcast" ? (
          <Overcast width={64} height={68} />
        ) : currentCondition === "rain" ? (
          <Rain width={64} height={68} />
        ) : currentCondition === "thunderStorm" ? (
          <ThunderStorm width={64} height={68} />
        ) : currentCondition === "snow" ? (
          <Snow width={64} height={68} />
        ) : currentCondition === "snowRain" ? (
          <SnowRain width={64} height={68} />
        ) : currentCondition === "thunderStormRain" ? (
          <ThunderStormRain width={64} height={68} />
        ) : (
          <PartiallyCloudy width={64} height={68} />
        )}
      </TopContainer>
      <BottomContainer>
        <Typography
          variant="body"
          textColor="n70"
          style={{
            fontFamily: "Inter",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "22px",
          }}
        >
          {tips[currentCondition as keyof typeof tips]}
        </Typography>
      </BottomContainer>{" "}
    </Container>
  );
};

export default React.memo(WeatherTip);
