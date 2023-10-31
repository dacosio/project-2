import React, { CSSProperties } from "react";
import { PrecipitationProps } from "./Precipitation.props";
import { Container, PrecipSvgContainer } from "./Precipitation.style";
import { Col, Row } from "react-grid-system";
import Typography from "../Typography";
import { Rain } from "../SVG";

const Precipitation = (props: PrecipitationProps): JSX.Element => {
  const { precip, nextExpectedRainfall } = props;

  const generalStyle: CSSProperties = {
    fontSize: "14px",
    fontStyle: "normal",
    lineHeight: "20px",
  };

  const precipStyle: CSSProperties = {
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "46px",
  };

  const subtitileStyle: CSSProperties = {
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "25px",
  };
  return (
    <Container>
      <Typography
        variant="body"
        weight="700"
        textColor="n70"
        style={generalStyle}
      >
        Precipitation
      </Typography>
      <PrecipSvgContainer>
        <Typography variant="body" textColor="n90" style={precipStyle}>
          {precip}mm
        </Typography>
        <Rain width={100} height={92}></Rain>
      </PrecipSvgContainer>
      <Typography variant="subtitle" textColor="n70" style={subtitileStyle}>
        In the last 24h
      </Typography>

      <Typography
        variant="body"
        weight="400"
        textColor="n90"
        style={generalStyle}
      >
        Next expected rain is on {nextExpectedRainfall}
      </Typography>
    </Container>
  );
};

export default React.memo(Precipitation);
