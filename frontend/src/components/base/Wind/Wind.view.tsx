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
  const propsStyle: CSSProperties = {
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "46px",
  };
  return (
    <Container>
      <Typography variant="small" textColor="n70">
        Wind
      </Typography>
      <ContentContainer>
        <LeftContainer>
          <Typography variant="body" textColor="n50">
            WIND
          </Typography>

          <WindContainer>
            <Typography variant="body" style={propsStyle}>
              {windSpeed}
            </Typography>
            <Typography variant="body" textColor="n50">
              KM/H
            </Typography>
          </WindContainer>

          <Typography variant="body" textColor="n50">
            GUST
          </Typography>

          <GustContainer>
            <Typography variant="body" style={propsStyle}>
              {gustSpeed}
            </Typography>
            <Typography variant="body" textColor="n50">
              KM/H
            </Typography>
          </GustContainer>
        </LeftContainer>
        <RightContainer>
          <WindCompass></WindCompass>
          <Arrow windDirection={windDirection}></Arrow>
        </RightContainer>
      </ContentContainer>
    </Container>
  );
};

export default React.memo(Wind);
