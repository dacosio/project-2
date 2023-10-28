import React, { CSSProperties } from "react";
import { PrecipitationProps } from "./Precipitation.props";
import { Container, PrecipSvgContainer } from "./Precipitation.style";
import { Col, Row } from "react-grid-system";
import Typography from "../Typography";
import { Rain } from "../SVG";

const Precipitation = (props: PrecipitationProps): JSX.Element => {
  const { precip, nextExpectedRainfall } = props;
  const titleStyle: CSSProperties = {
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "46px",
  };
  return (
    <Container>
      <Typography variant="body" weight="600" textColor="n70">
        Precipitation
      </Typography>
      <PrecipSvgContainer>
        <Typography variant="body" textColor="n90" style={titleStyle}>
          {precip}mm
        </Typography>
        <Rain width={140} height={140}></Rain>
      </PrecipSvgContainer>
      <Typography variant="subtitle" textColor="n70">
        In the last 24h
      </Typography>

      <Typography variant="body" textColor="n90">
        Next expected rain is on {nextExpectedRainfall}
      </Typography>
    </Container>
  );
};

export default React.memo(Precipitation);
