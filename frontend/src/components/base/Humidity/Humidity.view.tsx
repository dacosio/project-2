import React, { CSSProperties } from "react";
import { HumidityProps } from "./Humidity.props";
import { Container, SvgContainer } from "./Humidity.style";
import Typography from "../Typography";
import { Rain } from "../SVG";
import CircleProgress from "../CircleProgress";
import CircleProgressHumidity from "../CircleProgressHumidity";

const Humidity = (props: HumidityProps): JSX.Element => {
  const { humidity, dew, collapseState, ...rest } = props;
  const height = 130;
  const width = 130;

  const generalStyle: CSSProperties = {
    fontSize: "14px",
    fontStyle: "normal",
    lineHeight: "20px",
  };

  return (
    <Container collapseState={collapseState}>
      {" "}
      <Typography
        variant="body"
        weight="700"
        style={generalStyle}
        textColor="n70"
      >
        Humidity
      </Typography>
      <SvgContainer>
        <CircleProgressHumidity
          maxValue={100}
          value={humidity}
          title={humidity.toString()}
          subtitle="%"
          id="1"
          size="desktop"
          style={{ height, width }}
        />
      </SvgContainer>
      <Typography
        variant="body"
        weight="400"
        textColor="n90"
        style={generalStyle}
      >
        The dew point is {dew}° right now.
      </Typography>
    </Container>
  );
};

export default React.memo(Humidity);
