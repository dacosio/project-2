import React from "react";
import { WeatherGeneratedProps } from "./Weather.props";
import { Container } from "./Weather.style";
import Chips from "components/base/Chips";

const WeatherView = (props: WeatherGeneratedProps) => {
  return (
    <Container>
      {" "}
      Weather
      <Chips label="Button1" variant="filled" />
      <Chips label="Button2" variant="filled" active={true} />
      <Chips label="Button3" variant="outlined" />
      {/* <Chips label="Button" variant="outlined" active={true} /> */}
    </Container>
  );
};

export default WeatherView;
