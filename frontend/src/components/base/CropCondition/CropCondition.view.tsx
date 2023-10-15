import React from "react";
import { CropConditionProps } from "./CropCondition.props";
import {
  Container,
  ContentContainer,
  Logo,
  Temps,
} from "./CropCondition.style";
import Typography from "./../Typography";
import Clock from "../SVG/Clock";
import Thermometer from "../SVG/Thermometer";
import Hygrometer from "../SVG/Hygrometer";
import Apple from "../SVG/Apple";

const CropCondition = (props: CropConditionProps): JSX.Element => {
  const { variant, sizing = "mobile", title, description } = props;

  return (
    <Container>
      <Typography
        variant={sizing === "mobile" ? "small" : "body"}
        weight="700"
        textColor="shade8"
      >
        {title
          ? title
          : variant === "temperature"
          ? "Ideal Temperature"
          : variant === "humidity"
          ? "Ideal Humidity"
          : variant === "duration"
          ? "Growth Duration"
          : variant === "yield"
          ? "Average Yield"
          : null}
      </Typography>
      <ContentContainer>
        <div>
          {variant === "temperature" ? (
            <Thermometer />
          ) : variant === "humidity" ? (
            <Hygrometer width={35} height={44} />
          ) : variant === "duration" ? (
            <Clock width={39} height={39} />
          ) : variant === "yield" ? (
            <Apple />
          ) : null}
        </div>
        <Typography
          variant={sizing === "mobile" ? "body" : "title5"}
          weight="700"
          textColor="shade8"
        >
          {description}
        </Typography>
      </ContentContainer>
    </Container>
  );
};

export default React.memo(CropCondition);
