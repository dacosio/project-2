import React, { CSSProperties } from "react";
import { WindProps } from "./Wind.props";
import {
  Arrow,
  Container,
  ContentContainer,
  GustContainer,
  LeftContainer,
  RightContainer,
  WindContainer,
} from "./Wind.style";
import Typography from "../Typography";
import { WindCompass } from "../SVG";

const Wind = (props: WindProps): JSX.Element => {
  const { windSpeed, gustSpeed, windDirection } = props;

  const generalStyle: CSSProperties = {
    fontSize: "14px",
    fontStyle: "normal",
    lineHeight: "20px",
  };

  const propsStyle: CSSProperties = {
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "46px",
  };
  return (
    <Container>
      <Typography
        variant="body"
        weight="600"
        textColor="n70"
        style={generalStyle}
      >
        Wind
      </Typography>
      <ContentContainer>
        <LeftContainer>
          <Typography
            variant="body"
            textColor="n50"
            weight="400"
            style={generalStyle}
          >
            WIND
          </Typography>

          <WindContainer>
            <Typography variant="body" style={propsStyle}>
              {windSpeed}
            </Typography>
            <Typography
              variant="body"
              textColor="n50"
              weight="500"
              style={generalStyle}
            >
              KM/H
            </Typography>
          </WindContainer>

          <Typography
            variant="body"
            textColor="n50"
            weight="400"
            style={generalStyle}
          >
            GUST
          </Typography>

          <GustContainer>
            <Typography variant="body" style={propsStyle}>
              {gustSpeed}
            </Typography>
            <Typography
              variant="body"
              textColor="n50"
              weight="500"
              style={generalStyle}
            >
              KM/H
            </Typography>
          </GustContainer>
        </LeftContainer>
        <RightContainer>
          <WindCompass width={94} height={100}></WindCompass>
          <Arrow windDirection={windDirection}></Arrow>
        </RightContainer>
      </ContentContainer>
    </Container>
  );
};

export default React.memo(Wind);
