import React from "react";
import { HumidityProps } from "./Humidity.props";
import { Container, SvgContainer } from "./Humidity.style";
import Typography from "../Typography";
import { Rain } from "../SVG";
import CircleProgress from "../CircleProgress";
import CircleProgressHumidity from "../CircleProgressHumidity";

const Humidity = (props: HumidityProps): JSX.Element => {
  const { humidity, dew, ...rest } = props;
  const height = 150;
  const width = 150;

  return (
    <Container>
      {" "}
      <Typography variant="small">Humidity</Typography>
      <SvgContainer>
        <CircleProgressHumidity
          maxValue={100}
          value={humidity}
          title="65"
          subtitle="%"
          id="1"
          size="desktop"
          style={{ height, width }}
        />
      </SvgContainer>
      <Typography variant="body">The dew point is {dew}° right now.</Typography>
    </Container>
  );
};

export default React.memo(Humidity);
