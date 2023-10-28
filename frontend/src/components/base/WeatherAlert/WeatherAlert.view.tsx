import React, { CSSProperties } from "react";
import { WeatherAlertProps } from "./WeatherAlert.props";
import {
  Container,
  TitleContainer,
  ContentContainer,
} from "./WeatherAlert.style";
import { WeatherAlertSVG } from "../SVG";
import Typography from "../Typography";
import { Row, Col } from "react-grid-system";
import theme from "utils/Theme";

const WeatherAlert = (props: WeatherAlertProps): JSX.Element => {
  const { alert } = props;
  const generalStyle: CSSProperties = {
    fontSize: "16px",
    fontStyle: "normal",
    lineHeight: "22px",
  };
  return (
    <Container>
      <TitleContainer>
        <WeatherAlertSVG width={30} height={30}></WeatherAlertSVG>
        <Typography variant="body" weight="700" textColor="error">
          STORM INCOMING
        </Typography>
        {/* <Typography variant="title5">STORM INCOMING</Typography> */}
      </TitleContainer>
      <ContentContainer>
        <Typography variant="body" weight="400" style={generalStyle}>
          {alert}
        </Typography>
      </ContentContainer>
    </Container>
  );
};

export default React.memo(WeatherAlert);
